# Getting Started with Your Wedding Website

Congratulations! Your beautiful wedding invitation website is ready. Here's what you need to do to customize and deploy it.

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

3. **Customize your website:**
   - Edit [`config.ts`](config.ts) for all content
   - See full instructions in [`CUSTOMIZATION.md`](CUSTOMIZATION.md)

## What's Included

### Features
- Professional, elegant design perfect for weddings
- Fully responsive (works on all devices)
- Smooth scroll animations
- Photo galleries with 50 wedding photos organized into 9 themed sections
- Interactive venue map
- QR code gift section with modal popup
- Optimized images for fast loading

### Themed Photo Sections
1. **The Beginning** - Engagement photos
2. **Two Hearts, One Soul** - Couple portraits
3. **A Journey of Love** - Love story moments
4. **Beautiful Memories** - Cherished moments
5. **Our Journey Together** - Adventures
6. **Celebrating Us** - Celebration moments
7. **Together Forever** - Intimate moments
8. **Family & Love** - Family photos
9. **Special Moments** - Unique captures

### Technology Stack
- Next.js 16 (React framework)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Optimized image loading

## Essential Customization Steps

### 1. Update Wedding Information
Edit [`config.ts`](config.ts) and update:
- Bride and groom names
- Wedding date and time
- Venue name and address

### 2. Add Google Maps
1. Search your venue on Google Maps
2. Click Share → Embed a map
3. Copy the URL from the iframe `src`
4. Paste it in `config.ts` under `venue.mapEmbedUrl`

### 3. Add QR Codes for Gifts
1. Generate QR codes for your bank accounts
2. Save as `public/images/bride-qr.png` and `public/images/groom-qr.png`
3. Update paths in `config.ts`
4. Uncomment the Image component in [`components/GiftSection.tsx:77-82`](components/GiftSection.tsx#L77-L82)

### 4. Customize Text
All text content can be edited in [`config.ts`](config.ts):
- Hero section messages
- Love story paragraphs
- Photo section titles and descriptions
- Footer messages

## File Structure

```
wedding-invitation/
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── ImageGallery.tsx
│   ├── VenueSection.tsx
│   └── GiftSection.tsx
├── public/images/        # All 50 wedding photos
├── config.ts            # ⭐ Main configuration file
├── README.md            # Detailed documentation
├── CUSTOMIZATION.md     # Customization guide
└── CLAUDE.md           # Original requirements
```

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy Options

**Vercel (Recommended):**
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Auto-deploys on every commit

**Netlify:**
1. Push to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Build command: `npm run build`

**Static Export (for CDN):**
1. Update `next.config.js` to add `output: 'export'`
2. Run `npm run build`
3. Upload the `out` folder to your CDN

## Need Help?

- **Customization:** See [`CUSTOMIZATION.md`](CUSTOMIZATION.md)
- **Full Documentation:** See [`README.md`](README.md)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Next Steps

1. Run `npm run dev` to see your website
2. Edit `config.ts` to add your details
3. Test on mobile (resize browser or use phone)
4. Deploy to Vercel or Netlify
5. Share your beautiful wedding website!

---

**Best wishes for your special day! 💕**
