# 🚀 Arnold's Portfolio

Modern, premium portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Responsive Design**: Perfectly adapts to all screen sizes (mobile, tablet, desktop)
- **100vh Sections**: Each section occupies full viewport on large screens
- **Smooth Animations**: Custom easing and micro-interactions
- **Premium Gradients**: Indigo → Violet → Cyan color theme
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run on local network
npm run dev:network

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables needed for this project! ✨

## 📝 Customization

### Update Personal Info

Edit `src/data/portfolio.js` to update:
- Skills
- Projects
- Certifications
- Education
- Social links

### Change Colors

Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  primary: '#4F46E5',   // Indigo
  secondary: '#7C3AED', // Violet
  tertiary: '#06B6D4',  // Cyan
}
```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Section.jsx
│   │   └── Sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Certifications.jsx
│   │       ├── Education.jsx
│   │       └── Contact.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── vercel.json
└── package.json
```

## 🎨 Design Philosophy

- **Premium Feel**: Smooth animations, vibrant gradients
- **Consistency**: Aligned headers, uniform spacing
- **Performance**: Lightweight animations, optimized builds
- **Accessibility**: Semantic HTML, proper contrast ratios

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Arnold
