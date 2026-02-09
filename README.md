# Andrei Zyrish C. Manuel - Portfolio

A modern portfolio website built with Next.js, featuring a responsive design and dark mode support.

## Features

- ✨ Modern, responsive design
- 🌙 Dark/Light theme toggle with localStorage persistence
- ⚡ Next.js 14 with React 18
- 📱 Mobile-friendly
- 🎨 Scroll animations
- 🔧 Easy to customize

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.js          # Navigation & theme toggle
│   ├── Hero.js            # Hero section
│   ├── Skills.js          # Skills section
│   ├── Projects.js        # Projects section
│   ├── Education.js       # Education section
│   └── Contact.js         # Contact section
├── package.json           # Dependencies
├── next.config.js         # Next.js config
└── jsconfig.json          # JS compiler config
```

## Getting Started

### Prerequisites
- Node.js 16+ installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Contact Links
In `components/Contact.js`, update:
- Email address
- LinkedIn profile URL
- GitHub profile URL

### Modify Content
Each section is a separate component in the `components/` folder:
- `Hero.js` - Main introduction
- `Skills.js` - Technical skills
- `Projects.js` - Featured projects
- `Education.js` - Education info
- `Contact.js` - Contact information

### Styling
All global styles are in `app/globals.css`. CSS variables at the top handle theming:
- Light mode colors (default)
- Dark mode colors (under `[data-theme="dark"]`)

## Theme System

The app uses CSS custom properties for theming:
- `--bg-color` - Background
- `--text-color` - Text
- `--accent-color` - Primary accent
- `--secondary-bg` - Secondary background
- `--border-color` - Borders
- `--hero-bg` - Hero section background

Theme preference is stored in localStorage and automatically uses system preference if no stored value.

## Deployment

This Next.js app can be deployed on:
- [Vercel](https://vercel.com) (recommended, native Next.js support)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- Any static hosting service (after `npm run build`)

## License

MIT License - feel free to use this as a template for your own portfolio!
