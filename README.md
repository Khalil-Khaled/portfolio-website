# Khalil Khaled - Portfolio

A modern, interactive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🌙 Dark/Light theme toggle (Night Owl inspired dark theme)
- ✨ Smooth animations and micro-interactions
- 📱 Fully responsive design
- ⚡ Optimized performance
- ♿ Accessible (WCAG AA compliant)
- 🎨 Modern bento grid layout

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Khalil-Khaled/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Photo

Replace the placeholder in `src/components/about.tsx` with your image:

```tsx
<Image 
  src="/your-photo.jpg" 
  alt="Khalil Khaled"
  fill
  className="object-cover"
/>
```

### Adding Project Screenshots

1. Add your screenshots to the `public/projects/` folder
2. Update the `image` property in `src/components/projects.tsx`

### Adding Your CV

1. Add your CV PDF to the `public/` folder as `cv.pdf`
2. The download button will automatically work

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

The site will be automatically deployed on every push to the main branch.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Home page
├── components/
│   ├── about.tsx        # About section
│   ├── certifications.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navigation.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
public/
├── cv.pdf              # Your CV (add this)
└── projects/           # Project screenshots (create this)
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email:** khalilkhaled1995@gmail.com
- **LinkedIn:** [linkedin.com/in/khalil-khaled](https://linkedin.com/in/khalil-khaled)
- **GitHub:** [github.com/Khalil-Khaled](https://github.com/Khalil-Khaled)
