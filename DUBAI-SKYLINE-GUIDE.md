# 🏙️ Dubai Skyline Background - Setup Guide

## 🎯 Overview

The hero section now includes a faded Dubai skyline background image. Currently, a placeholder SVG is being used, but you should replace it with a high-quality Dubai skyline photo.

## 📋 Current Status

- ✅ Hero component updated with background image
- ✅ Placeholder SVG created
- ⏳ Waiting for actual Dubai skyline photo

## 📸 Image Requirements

### Specifications
- **File Name**: `dubai-skyline.jpg`
- **Location**: `/public/images/dubai-skyline.jpg`
- **Resolution**: At least 1920×1080px (Full HD)
- **Format**: JPG or WebP (preferred for better compression)
- **File Size**: Optimize to under 500KB for fast loading
- **Content**: Dubai skyline showing Burj Khalifa and other iconic buildings

### Recommended Image Style
- Skyline view during sunset/blue hour
- Showing Burj Khalifa prominently
- Good contrast with dark navy overlay
- Minimal distractions in foreground
- Horizontal orientation (landscape)

## 🔧 How to Add the Image

### Step 1: Obtain a Dubai Skyline Image
- Use a stock photo service (Shutterstock, Adobe Stock, etc.)
- Use a royalty-free image site (Unsplash, Pexels)
- Use your own photography
- Ensure you have proper rights to use the image

### Step 2: Optimize the Image
- Resize to 1920×1080px or similar 16:9 aspect ratio
- Compress using a tool like TinyJPG or Squoosh
- Save as JPG or WebP format

### Step 3: Add to Project
- Save the file as `dubai-skyline.jpg`
- Place in `/public/images/` directory
- Replace the placeholder SVG

### Step 4: Update Component (Optional)
The component is already configured to use `/images/dubai-skyline.jpg`, so no code changes are needed once you add the file.

## 🎨 Design Notes

- The image is set to 20% opacity (`opacity-20`) to create a subtle background effect
- The navy background color shows through the transparent image
- Additional subtle pattern overlay adds texture
- The image is configured with `object-cover` to maintain aspect ratio

## 🌐 Live Preview

**URL**: http://localhost:3000

**Hard refresh**: `Ctrl + Shift + R` after adding the image to see the changes

## 📝 Alternative Options

If you prefer a different image style or name:

1. Add your image to `/public/images/`
2. Update the `src` attribute in `ProfessionalHero.tsx`:

```typescript
<Image
  src="/images/your-image-name.jpg"
  alt="Dubai Skyline"
  fill
  priority
  className="object-cover object-center"
  sizes="100vw"
/>
```

## ✅ Quality Checklist

When adding the final image, ensure:
- [ ] High resolution (1920×1080px+)
- [ ] Optimized file size (<500KB)
- [ ] Proper licensing/rights
- [ ] Good contrast with overlay
- [ ] Shows iconic Dubai buildings
- [ ] Horizontal orientation
- [ ] Professional quality

---

**The hero section is ready with a placeholder - just add your Dubai skyline image to complete the look!** 🚀
