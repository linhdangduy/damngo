## Overview

This is landing page for our upcoming wedding, where we show bride and groom and our families images with wedding information like: words for describing our love so we can entertain people, wedding venue address, date and time, embedded map to show the way to wedding venue, and the place for showing banking QR code of bride and groom so other people can send gifts to us.

## UI/UX

- The website MUST looked so professional, formal, solemn that suitable for wedding ceremonies.
- The users MUST be able to scroll the website vertically, see all the images and wording, wedding venue & date and time information near the beginning of the website.
- Following wedding information is the QR codes of bride and groom with button to open it, not show it directly at the first glance
- Then the remain image can be shown at the end.
- The website MUST be responsive for all screen size: PC, laptop, smart phone with various size, smart television, tablet...
  - But we should limit the width of the website so on large size screen / PC / ipad, the users can see all the information/images easily and don't have to scan from left to right
- The website MUST have smooth transition between pages and images when users scroll down.
- The website MUST be loaded so that users do not have friction during scrolling
- The wording should having lovely wording following all the image I puts in the public/images folder.
- The wording should be in Vietnamese.
- The theme should be in red, like the image with the name public/images/wedding-invitation/outlook-of-wedding-invitation.png

## Coding practice

- We should follow the best practices for HTML, Javascript/Typescript, CSS for the website.
- Please consider using popular and convenient library, package for CSS
- Please make sure the website bring good loading experience for users
- Please follow the best practice for code organization within the project

## Image Optimization

**IMPORTANT: Always optimize images before deploying to maintain fast loading times!**

### Why Optimize Images?
- Original photos are typically 3-8MB each (way too large for web)
- Optimized images are 120-300KB each (95% smaller!)
- Faster page load = better user experience
- Lower bandwidth costs

### How to Optimize Images

1. **Add new images** to the `public/images/` folder (any subdirectory is fine)

2. **Run the optimization script**:
   ```bash
   npm run optimize-images
   ```

3. **Review the output** - it will show you:
   - Original size vs optimized size
   - Percentage saved
   - Where optimized images are saved

4. **Replace original images** (the script creates a backup):
   ```bash
   # Backup originals (if not already backed up)
   mv public/images public/images-backup-YYYY-MM-DD

   # Use optimized images
   mv public/images-optimized public/images
   ```

5. **Rebuild for production**:
   ```bash
   npm run build
   ```

### Optimization Settings

The optimization script ([scripts/optimize-images.js](scripts/optimize-images.js)) does:
- Resizes images to max 2000px on longest side (perfect for all screens)
- Compresses JPG with 80% quality (visually lossless)
- Compresses PNG with level 9 compression
- Enables progressive JPEG loading (faster perceived load)

### Image Guidelines

- **Wedding photos**: Place in `public/images/`
- **Wedding invitations**: Place in `public/images/wedding-invitation/`
- **QR codes**: Place in `public/images/` (e.g., bride-qr.png, groom-qr.png)
- **Format**: JPG for photos, PNG for graphics/QR codes
- **Always run optimization** before deploying!

### File Organization

```
public/
  images/              # Optimized images (used by website)
    wedding-invitation/
      outlook-of-wedding-invitation.png
      inside-of-wedding-invitation.png
    AMV_1222.JPG       # Wedding photos
    bride-qr.png
    groom-qr.png

images-original/       # Backup of original high-res images (gitignored)
archive/              # Old/unused images (gitignored)
```

## Deployment

### GitHub Pages Setup

The website is configured for deployment to GitHub Pages at `https://linhdangduy.github.io/damngo/`

**Environment Configuration:**
- `.env.development` - Empty basePath for local development (access at http://localhost:3000)
- `.env.production` - Sets `NEXT_PUBLIC_BASE_PATH=/damngo` for GitHub Pages

**Build for production:**
```bash
npm run build
```

This creates the `out/` directory with:
- All HTML, CSS, JS files
- Optimized images
- Correct `/damngo` paths for GitHub Pages
- `.nojekyll` file (auto-added during build)

**Deploy the `out/` directory** to your GitHub Pages branch.

### Performance Tips
- Images are automatically optimized (see Image Optimization section above)
- Progressive JPEGs load faster
- Total deployment size: ~3.5MB (very fast!)
- CDN caching is handled by GitHub Pages automatically
