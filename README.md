# Ashley Majer - Portfolio Website

A modern, accessible portfolio website showcasing my journey as a Full-Stack Software Engineer. Built with React and featuring custom animations, responsive design, and a bioluminescent scroll indicator.

[![Live Site](https://img.shields.io/badge/Live-Site-4f7de9?style=for-the-badge)](https://majerash.github.io/AMajerWebsite/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## Features

### Design & User Experience

- **Single-Page Application** with smooth scroll navigation and active section highlighting
- **Responsive Design** that adapts seamlessly from mobile to desktop
- **Custom Bioluminescent Scrollbar** - a unique visual indicator that tracks scroll progress
- **Animated Sprite Character** - interactive character animation on the home section
- **Accessibility-First** approach with semantic HTML, ARIA labels, and keyboard navigation
- **Pop-in Animations** for section headers that trigger on scroll

### Sections

- **Home** - Hero section with animated introductions and tagline
- **Projects** - Showcase of featured work with live demos and GitHub links
- **About** - Personal story, technologies, timeline, and GitHub activity calendar
- **Contact** - Professional contact form for inquiries

### Technical Highlights

- Custom scroll-spy navigation with active state management
- Pixel-perfect scroll progress tracking (pinch/zoom compatible)
- Responsive typography using CSS `clamp()` for fluid scaling
- Modular CSS architecture organized by component and layout
- Social media sidebar with quick access to GitHub, LinkedIn, Email, and Resume

## Live Demo

Visit the live site: **[majerash.github.io/AMajerWebsite](https://majerash.github.io/AMajerWebsite/)**

## Built With

### Core Technologies

- **React 18.3.1** - Component-based UI framework
- **React Router DOM 6.30.1** - Client-side routing
- **Vite 5.2.0** - Next-generation frontend build tool

### Libraries & Tools

- **React GitHub Calendar** - Visual representation of GitHub contributions
- **gh-pages** - Automated deployment to GitHub Pages

### Development Stack

- Modern ES6+ JavaScript
- CSS3 with custom properties and animations
- Responsive design patterns (mobile-first)

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/MajerAsh/AMajerWebsite.git
cd AMajerWebsite
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Production-ready files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will automatically build and deploy the site to GitHub Pages.

## Project Structure

```
AMajerWebsite/
├── public/
│   ├── assets/          # Sprite images and character animations
│   └── icons/           # Social media and UI icons
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Badge.jsx
│   │   ├── CharacterAnimation.jsx
│   │   └── Timeline.jsx
│   ├── pages/           # Main page components
│   │   ├── About.jsx
│   │   ├── AtAGlance.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── styles/          # Modular CSS architecture
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── hero.css
│   │   ├── layout.css
│   │   ├── nav.css
│   │   ├── scrollbar.css
│   │   └── index.css
│   ├── App.jsx          # Root component with scroll logic
│   └── main.jsx         # Application entry point
├── index.html
├── vite.config.js
└── package.json
```

## Key Components

### App.jsx

- Manages global state (menu, active section, scroll progress)
- Implements scroll-spy navigation
- Renders bioluminescent scrollbar with pixel-based positioning
- Contains smooth scroll handler for navigation links

### CharacterAnimation.jsx

- Sprite-based animation component
- Alternates between "walk" and "wave" phases
- Responsive scaling for mobile and desktop
- Mobile-optimized horizontal travel animation

### Timeline.jsx

- Educational and professional journey visualization
- Pop-in animation on scroll

### Badge.jsx

- Technology/skill icon display component
- Reusable across Projects and About sections

## 🎯 Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start development server with hot-reload    |
| `npm run build`   | Clean and build optimized production bundle |
| `npm run preview` | Preview production build locally            |
| `npm run deploy`  | Build and deploy to GitHub Pages            |
| `npm run clean`   | Remove `dist/` directory                    |

## Deployment

This site is deployed using **GitHub Pages** with automated deployment via the `gh-pages` package.

**Deployment Process:**

1. Code is built using Vite (`npm run build`)
2. The `dist/` folder is pushed to the `gh-pages` branch
3. GitHub Pages serves the site from the `gh-pages` branch

**Base URL Configuration:**
The site is configured with `base: "/AMajerWebsite/"` in `vite.config.js` to match the GitHub Pages repository path.

## Design Decisions

### Accessibility

- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`)
- ARIA labels for icon links and navigation controls
- Keyboard-friendly navigation
- Screen reader support with `.sr-only` utility class
- Scroll margin for smooth anchor navigation

### Performance

- Component-based architecture for code splitting
- Optimized sprite animations using CSS `steps()`
- Efficient scroll event handling with state management
- Vite for fast builds and optimized production bundles

### Mobile-First Design

- Responsive typography with `clamp()` for fluid scaling
- Mobile-optimized character animations with scaled transforms
- Touch-friendly navigation with hamburger menu
- Pixel-based scroll calculations for pinch/zoom compatibility

## Customization

### Update Personal Information

- Edit contact links in `App.jsx` (sidebar social section)
- Modify hero text in `pages/Home.jsx`
- Update about content in `pages/About.jsx`

### Modify Colors & Styling

- CSS custom properties are defined in `styles/base.css`
- Component-specific styles are in their respective CSS files
- Global layout styles are in `styles/layout.css`

### Add/Remove Projects

- Edit the projects array in `pages/Projects.jsx`
- Add project images to `public/assets/`

## License

This project is open source and available for personal and educational use.

## Connect

- **GitHub**: [@MajerAsh](https://github.com/MajerAsh)
- **LinkedIn**: [Ashley Majer](https://www.linkedin.com/in/ashleymajer/)
- **Email**: [majerash@gmail.com](mailto:MajerCoding@gmail.com)
- **Resume**: [View Resume](https://docs.google.com/document/d/11YKz9bPIxjuucCJu3K-GDEri7xVFniPtqDfNjT_a00s/edit?usp=sharing)

---

**Built with ❤️ by Ashley Majer**
