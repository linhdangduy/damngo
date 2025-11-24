# Quick Customization Guide

This guide will help you quickly customize your wedding website.

## Step 1: Update Your Information

Open [`config.ts`](config.ts) and update:

### Basic Information
```typescript
couple: {
  bride: {
    name: "Your Bride's Full Name",
    firstName: "Bride",
  },
  groom: {
    name: "Your Groom's Full Name",
    firstName: "Groom",
  },
}
```

### Wedding Date & Time
```typescript
wedding: {
  date: "Saturday, December 25th, 2025",
  time: "4:00 PM - 10:00 PM",
}
```

### Venue Details
```typescript
venue: {
  name: "Your Venue Name",
  address: "Full Venue Address",
  mapEmbedUrl: "Your Google Maps Embed URL",
}
```

## Step 2: Add Your QR Codes

1. Create QR codes for your bank accounts (use a QR code generator)
2. Save them as:
   - `public/images/bride-qr.png`
   - `public/images/groom-qr.png`

3. Update in `config.ts`:
```typescript
gifts: {
  bride: {
    name: "Bride's Name",
    qrCodePath: "/images/bride-qr.png",
  },
  groom: {
    name: "Groom's Name",
    qrCodePath: "/images/groom-qr.png",
  },
}
```

## Step 3: Get Google Maps Embed URL

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your venue
3. Click **Share** → **Embed a map**
4. Copy the **src URL** from the iframe
5. Paste it in `config.ts` under `venue.mapEmbedUrl`

Example:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151...
```

## Step 4: Customize Text & Messages

Edit all text in `config.ts` under the `messages` section:

- Hero section text
- Your love story
- Photo section titles and descriptions
- Gift message
- Footer message

## Step 5: Organize Your Photos (Optional)

If you want to change which photos appear in each section:

1. Open [`app/page.tsx`](app/page.tsx)
2. Find the photo arrays (e.g., `engagementPhotos`, `couplePhotos`)
3. Update the image paths

Example:
```typescript
const engagementPhotos = [
  "/images/AMV_1915.JPG",
  "/images/AMV_1957.JPG",
  // Add or remove photos here
];
```

## Step 6: Change Colors (Optional)

To change the color scheme:

1. Open [`tailwind.config.ts`](tailwind.config.ts)
2. Update the wedding colors:

```typescript
colors: {
  wedding: {
    primary: "#d4af37",    // Main accent color (gold)
    secondary: "#f5f5dc",  // Secondary color (beige)
    accent: "#8b7355",     // Accent color (brown)
    rose: "#e8c4c4",       // Rose color
    cream: "#faf8f3",      // Background cream
  },
}
```

## Step 7: Test Your Website

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your changes.

## Step 8: Deploy

Once you're happy with your website:

```bash
npm run build
```

Then deploy to:
- **Vercel** (recommended): Push to GitHub and import to Vercel
- **Netlify**: Import from GitHub
- **Other hosting**: Upload the build files

## Common Questions

### How do I add more photo sections?

Copy a section in `app/page.tsx`:
```tsx
<Section className="bg-white">
  <ImageGallery
    images={yourPhotoArray}
    title="Your Title"
    description="Your description"
  />
</Section>
```

### How do I change fonts?

Update the Google Fonts import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Then update in `tailwind.config.ts`:
```typescript
fontFamily: {
  elegant: ["YourFont", "serif"],
}
```

### The QR codes don't show up?

Make sure:
1. QR code images are in `public/images/`
2. Paths in `config.ts` match your filenames
3. Uncomment the `<Image>` component in `components/GiftSection.tsx`

## Need Help?

Check the main [README.md](README.md) for more detailed information.

---

**Happy customizing! 💕**
