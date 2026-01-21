# Indie Eats - Cinematic Food Landing Page

A production-ready, single-page landing website for Indie Eats food brand. Built with Next.js 14, TailwindCSS, and ShadCN UI.

## 🎬 Features

- **Cinematic Design**: Bold, dramatic, Netflix-documentary inspired aesthetic
- **JSON-Driven Content**: All content (menu, offers, contact info) loaded from a single JSON file
- **Mobile-First**: Fully responsive, tap-to-call functionality
- **Fast & SEO-Friendly**: Optimized for performance and search engines
- **Easy to Update**: Edit only the JSON file to change all content

## 🚀 Live Preview

Visit `http://localhost:3000` after running the development server.

## 📋 Structure

```
/app
├── app/
│   ├── page.js          # Main landing page
│   ├── layout.js        # App layout with metadata
│   └── globals.css      # Global styles
├── components/
│   ├── hero-section.jsx      # Hero with CTA
│   ├── offers-section.jsx    # Special offers
│   ├── menu-section.jsx      # Accordion menu
│   ├── contact-section.jsx   # Contact & map
│   └── footer.jsx            # Footer with badges
└── public/
    └── data/
        └── content.json      # ALL CONTENT HERE
```

## 🎨 Design System

**Colors:**
- Charcoal backgrounds (#1a1a1a, #0a0a0a)
- Ember Red (#DC2626) - Primary CTA
- Warm Gold (#F59E0B) - Accents
- Deep shadows and dramatic lighting

**Typography:**
- Bold, black headlines (800-900 weight)
- Clean, modern sans-serif (Inter)
- High contrast for readability

## 📝 Updating Content

### Edit `/public/data/content.json`

**To Update Menu Items:**
```json
{
  "menu": {
    "categories": [
      {
        "name": "Burgers",
        "description": "Served with chips",
        "items": [
          {
            "name": "Your New Burger",
            "price": 7.99,
            "description": "Your description"
          }
        ]
      }
    ]
  }
}
```

**To Update Offers:**
```json
{
  "offers": [
    {
      "id": "new-offer",
      "title": "Your Offer Title",
      "description": "Your offer description",
      "image": "https://your-image-url.com",
      "expires": "Valid until..."
    }
  ]
}
```

**To Update Contact Info:**
```json
{
  "contact": {
    "phone": "01484 621575",
    "address": "22 Newsome Rd, Huddersfield HD4 6NY",
    "hours": {
      "monday": "16:00 - 23:45",
      ...
    }
  }
}
```

**To Update Hero:**
```json
{
  "hero": {
    "headline": "Your New Headline",
    "subheadline": "Your subheadline",
    "phone": "01484 621575",
    "offerHighlight": "10% OFF when you order by phone",
    "heroImage": "https://your-image-url.com"
  }
}
```

## 🛠 Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## 🚀 Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your site will be live in minutes.

## 📱 Mobile Optimization

- Tap-to-call buttons automatically work on mobile devices
- Responsive typography scales perfectly
- Touch-friendly interface with large tap targets
- Optimized images for fast loading

## 🎯 Call-to-Action Strategy

The site is designed to convert visitors into phone orders:
- **Hero CTA**: Large, prominent "Call To Order Now" button
- **10% Discount**: Highlighted offer badge
- **Phone Number**: Displayed prominently throughout
- **Contact Section**: Dedicated section with phone, address, map
- **No Online Ordering**: Focuses visitors on calling

## 🏪 Business Information

- **Name**: Indie Eats
- **Phone**: 01484 621575
- **Address**: 22 Newsome Rd, Huddersfield HD4 6NY
- **Hours**: Mon-Sat 16:00-23:45, Sun 16:00-22:45
- **Offer**: 10% off when ordering by phone

## 🌟 Key Sections

1. **Hero Section**: Full-screen dramatic image with CTA
2. **Latest Offers**: Card-based offer display
3. **Menu**: Accordion-style category browser
4. **Contact**: Phone, address, hours, and map
5. **Footer**: Social links, badges (100% Halal, etc.)

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Components**: ShadCN UI
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 📄 License

All rights reserved © 2025 Indie Eats

---

**Built with ❤️ for bold flavours and late night cravings.**
