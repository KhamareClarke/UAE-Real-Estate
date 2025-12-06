# Deployment Guide - City Plaza Real Estate Landing Page

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## Environment Setup

No environment variables required for basic functionality.

### Optional: Form Integration

To connect the lead form to your backend/CRM:

1. Create an API route at `app/api/leads/route.ts`
2. Update the form submit handler in `components/LeadForm.tsx` (line 83)
3. Replace console.log with actual API call:

```typescript
const response = await fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Integration Options

**Email Service (e.g., SendGrid, Mailgun)**
- Add API key to environment variables
- Send form data via email API

**CRM Integration (e.g., HubSpot, Salesforce)**
- Use their REST API to create leads
- Store API credentials in environment variables

**Database (e.g., Supabase, MongoDB)**
- Store leads directly in database
- Add connection string to environment variables

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Performance Optimization

The site is already optimized with:
- Next.js App Router for optimal performance
- Tailwind CSS for minimal CSS bundle
- Mobile-first responsive design
- Lazy loading where appropriate

## SEO

Update the following in `app/layout.tsx`:
- Title and description (already set)
- Add your logo to `public/` folder
- Consider adding structured data for local business

## Analytics

Add Google Analytics or other tracking:

1. Install package: `npm install @next/third-parties`
2. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// In the layout component
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

## Maintenance

### Update RERA Number
Edit `components/Footer.tsx` line 136 to add your actual RERA registration number.

### Update Content
All content is in the component files:
- Hero text: `components/Hero.tsx`
- Developers: `components/TrustedDevelopers.tsx`
- FAQs: `components/FAQ.tsx`
- Footer details: `components/Footer.tsx`

### Add Real Images
Replace the placeholder gradient in `components/Hero.tsx` (line 30) with an actual Abu Dhabi/Dubai skyline image:

```typescript
<img 
  src="/hero-skyline.jpg" 
  alt="Dubai skyline"
  className="w-full h-full object-cover"
/>
```

## Support

For issues or questions about the codebase, refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- React docs: https://react.dev
