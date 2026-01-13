# Ashley Majer - Portfolio Website

Full-stack developer portfolio built with React, showcasing technical projects and software engineering capabilities. Features responsive design, custom animations, and accessibility-focused implementation.

**Live Site:** [majerash.github.io/AMajerWebsite](https://majerash.github.io/AMajerWebsite/)

## Technical Overview

Modern single-page application demonstrating proficiency in:

- Frontend architecture using React 18.3.1 and Vite build tooling
- Responsive, mobile-first design with CSS3 custom properties
- Performance optimization through component-based architecture
- Web accessibility standards (WCAG) with semantic HTML and ARIA implementation
- GitHub Pages deployment automation

### Core Features

**Interactive Navigation**

- Scroll-spy navigation with active section tracking
- Smooth scroll behavior with proper scroll margin for anchored links
- Hamburger menu for mobile viewports
- Keyboard-accessible navigation controls

**UI/UX Implementations**

- Custom scroll progress indicator with pixel-precise tracking
- Pop-in animations triggered on scroll intersection
- Sprite-based character animation using CSS steps
- Responsive typography with fluid scaling via clamp()
- Touch-optimized interface elements

**Accessibility Compliance**

- Semantic HTML5 structure with proper heading hierarchy
- ARIA labels for icon-only buttons and links
- Screen reader support with sr-only utility classes
- Focus management for interactive elements
- Keyboard navigation throughout

## Technology Stack

**Frontend**

- React 18.3.1
- JavaScript (ES6+)
- CSS3 (Custom Properties, Grid, Flexbox)

**Build Tools & Deployment**

- Vite 5.2.0
- GitHub Pages via gh-pages
- ESLint & Prettier

**Development**

- Vitest for unit testing
- Component-based architecture
- Modular CSS organization

## Installation & Development

**Prerequisites:** Node.js v16+, npm

```bash
# Clone repository
git clone https://github.com/MajerAsh/AMajerWebsite.git
cd AMajerWebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Development server runs at `http://localhost:5173`

### Available Scripts

```bash
npm run dev        # Start development server with hot-reload
npm run build      # Create production build
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy to GitHub Pages
npm test           # Run unit tests
```

## Project Architecture

```
src/
├── components/          # Reusable UI components
│   ├── Badge.jsx           # Technology skill badges
│   ├── CharacterAnimation.jsx  # Sprite-based animation
│   ├── ProjectCard.jsx     # Project showcase cards
│   └── Timeline.jsx        # Career/education timeline
├── pages/              # Section components
│   ├── Home.jsx           # Hero/landing section
│   ├── AtAGlance.jsx      # Quick overview
│   ├── Projects.jsx       # Portfolio projects
│   ├── About.jsx          # Background & skills
│   └── Contact.jsx        # Contact information
├── styles/             # Modular CSS
│   ├── base.css           # CSS custom properties, resets
│   ├── components.css     # Component-specific styles
│   ├── layout.css         # Grid and layout structures
│   ├── nav.css            # Navigation styles
│   └── scrollbar.css      # Custom scrollbar indicator
├── hooks/              # Custom React hooks
│   └── usePopInOnScroll.js  # Intersection observer hook
├── App.jsx             # Root component, state management
└── main.jsx            # Application entry point
```

## Technical Implementation Notes

**State Management**

- React hooks for local state (useState, useEffect, useRef)
- Scroll position tracking with requestAnimationFrame
- Efficient re-renders through memoization where applicable

**Performance Optimization**

- Component code splitting
- Optimized scroll event handling (RAF throttling)
- CSS animations using transform for GPU acceleration
- Lazy loading considerations for images

**Responsive Design Strategy**

- Mobile-first CSS approach
- Breakpoint management via media queries
- Flexible typography with clamp() for viewport-relative sizing
- Touch-optimized tap targets (minimum 44x44px)

## Deployment

Deployed via GitHub Pages with automated CI/CD pipeline using gh-pages package.

**Build Process:**

1. Vite optimizes and bundles production assets
2. gh-pages pushes dist/ to deployment branch
3. GitHub Pages serves static site

Base URL configured in vite.config.js to match repository path structure.

## Professional Links

- GitHub: [@MajerAsh](https://github.com/MajerAsh)
- LinkedIn: [Ashley Majer](https://www.linkedin.com/in/ashleymajer/)
- Email: majerash@gmail.com
- Resume: [View Resume](https://docs.google.com/document/d/11YKz9bPIxjuucCJu3K-GDEri7xVFniPtqDfNjT_a00s/edit?usp=sharing)

---

© 2026 Ashley Majer | Full-Stack Software Engineer
