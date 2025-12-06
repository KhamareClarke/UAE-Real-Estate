# 📁 Developer Logos Setup Guide

## 🎯 Overview

This guide explains how to add developer logos to your landing page.

## 📂 Folder Structure

Create the following folder structure in your project:

```
uae/
├── public/
│   └── logos/
│       ├── aldar.png
│       ├── reportage.png
│       ├── bloom.png
│       ├── modon.png
│       ├── saas.png
│       └── radiant.png
```

## 📋 Required Logos

You need logos for these 6 developers:

1. **Aldar Properties** → `aldar.png`
2. **Reportage Properties** → `reportage.png`
3. **Bloom Holding** → `bloom.png`
4. **Modon** → `modon.png`
5. **SAAS Properties** → `saas.png`
6. **Radiant Real Estate** → `radiant.png`

## 🖼️ Logo Specifications

### Recommended Format
- **File Type**: PNG with transparent background
- **Dimensions**: 400px × 200px (2:1 ratio)
- **File Size**: Under 100KB per logo
- **Background**: Transparent (PNG)
- **Quality**: High resolution for retina displays

### Alternative Formats
- SVG (best for scalability)
- WebP (best for performance)
- JPG (if transparent background not available)

## 📥 How to Add Logos

### Step 1: Create the Logos Folder

```bash
# In your project root
mkdir -p public/logos
```

### Step 2: Add Your Logo Files

Place your logo files in `public/logos/` with these exact names:
- `aldar.png`
- `reportage.png`
- `bloom.png`
- `modon.png`
- `saas.png`
- `radiant.png`

### Step 3: Update the Component (Already Done)

The `DeveloperPartners.tsx` component is already configured to use these logos.

### Step 4: Replace Placeholders (After Adding Logos)

Once you've added the logos, update the component to use Next.js Image:

```typescript
// Replace this section in DeveloperPartners.tsx:

{/* Logo Placeholder - Replace with actual Image component when logos are added */}
<div className="relative w-full h-full flex items-center justify-center">
  <div className="text-center">
    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-gold/20 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
      <span className="text-3xl font-bold text-accent">
        {developer.name.charAt(0)}
      </span>
    </div>
    <p className="text-xs text-gray-500">Logo placeholder</p>
  </div>
</div>

// With this:

<Image
  src={developer.logo}
  alt={`${developer.name} logo`}
  width={200}
  height={100}
  className="object-contain group-hover:scale-105 transition-transform"
  priority={index < 3}
/>
```

## 🎨 Logo Optimization Tips

### 1. Remove Backgrounds
- Use a tool like [remove.bg](https://remove.bg) to remove backgrounds
- Ensure transparent PNG format

### 2. Resize Images
- Use [TinyPNG](https://tinypng.com) to compress
- Maintain aspect ratio
- Target 400×200px dimensions

### 3. Convert to WebP (Optional)
```bash
# Using cwebp tool
cwebp -q 80 aldar.png -o aldar.webp
```

### 4. Optimize for Next.js
Next.js automatically optimizes images, but you can help by:
- Using appropriate dimensions
- Compressing before upload
- Using modern formats (WebP, AVIF)

## 🔄 Alternative: Using SVG Logos

If you have SVG logos (recommended for best quality):

### Step 1: Add SVG Files
```
public/logos/
├── aldar.svg
├── reportage.svg
├── bloom.svg
├── modon.svg
├── saas.svg
└── radiant.svg
```

### Step 2: Update File Extensions
In `DeveloperPartners.tsx`, change:
```typescript
logo: '/logos/aldar.png',  // Change to .svg
```

### Step 3: Use SVG Component
```typescript
<Image
  src={developer.logo}
  alt={`${developer.name} logo`}
  width={200}
  height={100}
  className="object-contain"
/>
```

## 📍 Where to Find Logos

### Official Sources
1. **Developer Websites**
   - Visit each developer's official website
   - Look for "Press Kit" or "Media" section
   - Download high-resolution logos

2. **Contact Developers**
   - Email their marketing department
   - Request official logo files
   - Mention you're a partner brokerage

3. **RERA Portal**
   - Some logos available on RERA website
   - Check developer registration pages

### Logo Resources
- [Aldar Properties](https://www.aldar.com) - Press section
- [Reportage Properties](https://www.reportageproperties.ae) - Media kit
- [Bloom Holding](https://www.bloomholding.ae) - About section
- [Modon Properties](https://www.modon.ae) - Contact for assets
- Search "developer name + logo PNG" for unofficial sources

## ✅ Verification Checklist

After adding logos:
- [ ] All 6 logo files are in `public/logos/`
- [ ] Files are named correctly (lowercase, no spaces)
- [ ] Images have transparent backgrounds
- [ ] File sizes are under 100KB each
- [ ] Images look clear on both desktop and mobile
- [ ] Component updated to use Image component
- [ ] Test page loads correctly
- [ ] Logos display properly on hover

## 🚀 Quick Start (If You Have Logos Now)

1. **Create folder**:
   ```bash
   mkdir public/logos
   ```

2. **Copy your logos** to `public/logos/` folder

3. **Rename files** to match:
   - `aldar.png`
   - `reportage.png`
   - `bloom.png`
   - `modon.png`
   - `saas.png`
   - `radiant.png`

4. **Update component** (see Step 4 above)

5. **Refresh browser** - Logos should appear!

## 🎯 Current Status

**Component Status**: ✅ Ready and configured
**Logo Placeholders**: ✅ Showing developer initials
**Waiting For**: Your logo files in `public/logos/`

Once you add the logos, the placeholders will be automatically replaced!

## 📞 Need Help?

If you need assistance:
1. Check that files are in the correct folder
2. Verify file names match exactly
3. Clear browser cache (Ctrl + Shift + R)
4. Check browser console for errors

---

**The component is ready - just add your logo files to `public/logos/` and they'll appear automatically!** 🎨
