# Image Optimization Script

This script optimizes images for web deployment, reducing file sizes by 95%+ while maintaining visual quality.

## Quick Start

```bash
npm run optimize-images
```

## What It Does

- **Resizes** images to max 2000px (maintains aspect ratio)
- **Compresses** JPG/JPEG at 80% quality (visually lossless)
- **Compresses** PNG with level 9 compression
- **Enables** progressive JPEG loading for faster perceived load times
- **Preserves** directory structure from `public/images/`
- **Outputs** to `public/images-optimized/`

## Results

Typical compression results:
- JPG photos: 3-8MB → 120-300KB (95-97% smaller)
- PNG graphics: 500KB → 200KB (60-70% smaller)

## Example Output

```
🖼️  Starting image optimization...

✓ AMV_1222.JPG: 6.2MB → 0.3MB (95.2% smaller)
✓ AMV_2640.JPG: 6.1MB → 0.3MB (95.1% smaller)
✓ inside-of-wedding-invitation.png: 0.6MB → 0.2MB (65.9% smaller)

✅ Image optimization complete!
📁 Optimized images are in: /path/to/public/images-optimized
```

## After Optimization

1. **Backup your originals** (if you haven't already):
   ```bash
   mv public/images public/images-original
   ```

2. **Use the optimized images**:
   ```bash
   mv public/images-optimized public/images
   ```

3. **Rebuild for production**:
   ```bash
   npm run build
   ```

## Settings

Edit `scripts/optimize-images.js` to adjust:
- `resize(2000, 2000)` - Max dimensions (in pixels)
- `.jpeg({ quality: 80 })` - JPG quality (1-100)
- `.png({ quality: 80, compressionLevel: 9 })` - PNG settings

## Technical Details

- Uses [sharp](https://sharp.pixelplumbing.com/) - high-performance image processing
- Progressive JPEG encoding for faster loading
- Maintains EXIF orientation
- Processes all subdirectories recursively
- Copies non-image files as-is
