# Wedding Invitation Website

A beautiful, professional, and responsive wedding invitation website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Professional & Elegant Design**: Carefully crafted to be formal and solemn, perfect for wedding ceremonies
- **Fully Responsive**: Works beautifully on all devices (PC, laptop, smartphone, tablet, smart TV)
- **Smooth Animations**: Elegant scroll animations and transitions using Framer Motion
- **Optimized Performance**: Fast loading with Next.js Image optimization and lazy loading
- **Photo Galleries**: Multiple themed sections to showcase your love story
- **Interactive Map**: Embedded Google Maps for venue location
- **Gift QR Codes**: Private QR code modal for banking gifts (not shown by default)
- **Easy Customization**: Simple configuration file to update all content

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Customize Your Content

Edit the `config.ts` file to personalize your wedding website:

- Couple names
- Wedding date and time
- Venue information
- Google Maps embed URL
- QR code paths
- All text content and messages

### 3. Add Your QR Codes

Place your banking QR code images in the `public/images/` folder:
- `bride-qr.png` - Bride's banking QR code
- `groom-qr.png` - Groom's banking QR code

Update the paths in `config.ts` if you use different filenames.

### 4. Get Google Maps Embed URL

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your wedding venue
3. Click "Share" button
4. Click "Embed a map"
5. Copy the URL from the `src` attribute in the iframe code
6. Paste it in `config.ts` under `venue.mapEmbedUrl`

Example:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151...
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your website.

### 6. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### 7. Start Production Server

```bash
npm start
```

## Project Structure

```
wedding-invitation/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── Hero.tsx              # Hero section with main image
│   ├── Section.tsx           # Reusable section with animations
│   ├── ImageGallery.tsx      # Photo gallery component
│   ├── VenueSection.tsx      # Venue details and map
│   └── GiftSection.tsx       # QR code gift section
├── public/
│   └── images/               # All your wedding photos
├── config.ts                 # **Edit this to customize content**
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## Customization Guide

### Changing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  wedding: {
    primary: "#d4af37",    // Gold
    secondary: "#f5f5dc",  // Beige
    accent: "#8b7355",     // Brown
    rose: "#e8c4c4",
    cream: "#faf8f3",
  },
}
```

### Organizing Photos

Your photos are automatically organized into themed sections:
- The Beginning (Engagement photos)
- Two Hearts, One Soul (Couple photos)
- A Journey of Love
- Beautiful Memories
- Our Journey Together
- Celebrating Us
- Together Forever
- Family & Love
- Special Moments

To change which photos appear in each section, edit `app/page.tsx` and update the photo arrays.

### Adding More Sections

Copy a `Section` component in `app/page.tsx` and add your own content:

```tsx
<Section className="bg-white">
  <ImageGallery
    images={yourPhotoArray}
    title="Your Title"
    description="Your description"
  />
</Section>
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (it's automatic!)

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Option 3: Static Export

For CDN deployment, you can export a static version:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  // ... rest of config
}
```

2. Run:
```bash
npm run build
```

3. Upload the `out` folder to your CDN/hosting service

## Performance Optimization

This website is already optimized for performance:

- ✅ Next.js Image component for automatic image optimization
- ✅ Lazy loading for images
- ✅ Code splitting
- ✅ Modern image formats (AVIF, WebP)
- ✅ Responsive images for different screen sizes
- ✅ Smooth scroll behavior
- ✅ Framer Motion for hardware-accelerated animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

This project is created for personal use. Feel free to customize it for your wedding!

---

**Congratulations on your upcoming wedding! 💑**
