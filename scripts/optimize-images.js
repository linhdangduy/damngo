import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, filename) {
  try {
    const ext = path.extname(filename).toLowerCase();

    if (ext === '.jpg' || ext === '.jpeg') {
      // For JPG images, compress and resize
      await sharp(inputPath)
        .resize(2000, 2000, { // Max 2000px on longest side
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 80, // Good balance between quality and size
          progressive: true // Progressive loading
        })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);

      console.log(`✓ ${filename}: ${(inputSize / 1024 / 1024).toFixed(1)}MB → ${(outputSize / 1024 / 1024).toFixed(1)}MB (${savings}% smaller)`);

    } else if (ext === '.png') {
      // For PNG images, optimize
      await sharp(inputPath)
        .resize(2000, 2000, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({
          quality: 80,
          compressionLevel: 9
        })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);

      console.log(`✓ ${filename}: ${(inputSize / 1024 / 1024).toFixed(1)}MB → ${(outputSize / 1024 / 1024).toFixed(1)}MB (${savings}% smaller)`);
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error.message);
  }
}

async function processDirectory(dir, outputDir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const inputPath = path.join(dir, item);
    const outputPath = path.join(outputDir, item);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      // Create subdirectory and process recursively
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }
      await processDirectory(inputPath, outputPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        await optimizeImage(inputPath, outputPath, item);
      } else {
        // Copy non-image files as-is
        fs.copyFileSync(inputPath, outputPath);
        console.log(`→ Copied ${item}`);
      }
    }
  }
}

console.log('🖼️  Starting image optimization...\n');
await processDirectory(inputDir, outputDir);
console.log('\n✅ Image optimization complete!');
console.log(`📁 Optimized images are in: ${outputDir}`);
