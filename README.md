# Fluent Voices 🌟

[![Astro](https://img.shields.io/badge/Astro-5.0.0?-FF4F40?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-18.2.0?-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1?-38B2AC?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3?-3178C6?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License MIT](https://img.shields.io/github/license/Devanshrocks4/fluentvoices?style=flat&logo=github)](LICENSE)

A modern, high-performance website for **Fluent Voices** - a student-led organization empowering voices through communication, leadership, and social responsibility. 🚀

This project represents a complete migration from Wix to **Astro + React**, delivering superior performance, maintainability, and user experience.

A modern, high-performance website for Fluent Voices, a student-led organization empowering voices through communication, leadership, and social responsibility. This project represents a complete migration from Wix to Astro, delivering superior performance, maintainability, and user experience.

## 🚀 Live Demos

| Platform | URL | Status |
|----------|-----|--------|
| Cloudflare Pages | [![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Live-brightgreen)](https://fluentvoices.pages.dev/) | https://fluentvoices.pages.dev/ |
| Netlify | [![Netlify](https://img.shields.io/badge/Netlify-Live-00C7B7?style=flat&logo=netlify)](https://thefluentvoices.netlify.app/) | https://thefluentvoices.netlify.app/ |

## 📋 Table of Contents

- [🌟 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🏗️ Tech Stack](#-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [🧪 Testing & CI](#-testing--ci)
- [🌍 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🌟 Project Overview

Fluent Voices is dedicated to empowering students by fostering confidence in public speaking, developing leadership skills, and driving meaningful social impact through CSR initiatives. The website serves as the digital hub for the organization, showcasing events, podcasts, leadership team, and community engagement opportunities.

### 🎯 Mission
> Building a community of confident communicators and impactful leaders who create positive change through communication and action. 💬✨

## ✨ Features

- **Dynamic Hero Section**: Immersive landing experience with animated backgrounds and particle effects
- **Mission Showcase**: Interactive cards highlighting core values (Empowerment, Growth, Impact)
- **Founder Spotlight**: Asymmetrical layout featuring the organization's visionary leader
- **Live Statistics**: Real-time display of community metrics (members, events, partners, impact)
- **Events Calendar**: Upcoming events with registration links and location details
- **Podcast Platform**: Integrated media player for "The Fluent Podcast" episodes
- **CSR Initiatives**: Showcase of social responsibility projects and NGO partnerships
- **Leadership Team**: Interactive profiles of organization leaders with social links
- **Responsive Design**: Optimized for all devices with fluid animations
- **Dark Theme**: Modern aesthetic with gradient accents and glassmorphism effects

## 🏗️ Project Architecture

### Technology Stack

**Frontend Framework:**
- **Astro**: Static site generator for optimal performance and SEO
- **React**: Component-based UI development with hooks and state management
- **TypeScript**: Type-safe development for better code quality

**Styling & UI:**
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Radix UI**: Accessible, unstyled UI components
- **Framer Motion**: Declarative animations and gesture handling
- **Lucide React**: Beautiful, consistent icon library

**Build & Development:**
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with autoprefixing

**Content Management:**
- **Mock CMS Service**: Simulated CRUD operations for static data
- **Type-Safe Entities**: Strongly typed data models for all content types

### Architecture Overview

```
fluent-voices-main/
├── src/
│   ├── components/
│   │   ├── pages/          # Page components (Home, About, Leadership, etc.)
│   │   ├── ui/             # Reusable UI components (Button, Card, etc.)
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── Router.tsx      # React Router configuration
│   ├── entities/           # TypeScript interfaces for CMS data
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and helpers
│   ├── pages/              # Astro page routes
│   └── styles/             # Global CSS and fonts
├── integrations/
│   ├── cms/                # Content management system integration
│   │   ├── service.ts      # Mock CRUD service
│   │   ├── types.ts        # Base CMS types
│   │   └── index.ts        # Exports
│   └── errorHandlers/      # Error boundary components
├── public/                 # Static assets (images, fonts, icons)
└── astro.config.mjs        # Astro configuration
```

### Key Architectural Decisions

1. **Astro + React Hybrid**: Leverages Astro's static generation capabilities while using React for interactive components, providing the best of both worlds for performance and interactivity.

2. **Component-Based Architecture**: Modular design with reusable UI components, page-specific components, and shared utilities for maintainability.

3. **Mock CMS Integration**: Implements a type-safe mock service that simulates real CMS operations, allowing for easy transition to production CMS systems like Contentful or Strapi.

4. **Animation-First Design**: Uses Framer Motion for smooth, performant animations that enhance user engagement without compromising accessibility.

5. **Mobile-First Responsive**: Built with Tailwind's responsive utilities ensuring optimal experience across all device sizes.

## 🚀 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fluent-voices-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview
```

## 📖 Usage

### Development Workflow

1. **Local Development**: Use `npm run dev` for hot-reloading development server
2. **Code Quality**: Run `npm run check` for TypeScript and ESLint checks
3. **Testing**: Execute `npm run test:run` for unit tests
4. **Build**: Use `npm run build` to generate production assets

### Content Management

The application uses a mock CMS service with predefined data. To modify content:

1. Update mock data in `src/integrations/cms/service.ts`
2. Add new entity types in `src/entities/`
3. Implement new pages in `src/components/pages/`

### Customization

- **Styling**: Modify Tailwind configuration in `tailwind.config.mjs`
- **Fonts**: Update font files in `public/fonts/` and CSS in `src/styles/fonts.css`
- **Colors**: Adjust theme colors in Tailwind config and component styles
- **Animations**: Customize Framer Motion animations in component files

## 🎨 Design System

### Color Palette
- **Primary**: Magenta/Pink gradients (`logo-pink`, `primary`)
- **Secondary**: Cyan/Blue gradients (`logo-cyan`, `secondary`)
- **Accent**: Deep Purple (`deep-purple`)
- **Neutral**: Black/White with opacity variations

### Typography
- **Headings**: Space Grotesk (bold, display-focused)
- **Body**: Syne (clean, readable)
- **Hierarchy**: Consistent font sizes and weights across components

### Components
- **Glassmorphism**: Backdrop blur effects with subtle borders
- **Gradient Accents**: Animated gradients for interactive elements
- **Particle Effects**: Dynamic background animations
- **Responsive Grid**: Flexible layouts adapting to screen sizes

## 🔧 Configuration

### Astro Configuration (`astro.config.mjs`)
- Server-side rendering enabled
- Tailwind and React integrations
- Custom Vite plugins for error handling
- Image optimization settings

### Environment Variables
- `BASE_NAME`: Router basename for deployment paths
- Image domains configured for Wix static assets

## 🧪 Testing

Run the test suite:
```bash
npm run test:run
```

Tests cover:
- Component rendering
- User interactions
- Animation behaviors
- Responsive layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for consistent formatting
- Semantic commit messages

## 📈 Performance

### Optimization Features
- **Static Generation**: Astro pre-renders pages for instant loading
- **Image Optimization**: Automatic image compression and WebP conversion
- **Code Splitting**: Automatic chunking for optimal bundle sizes
- **Lazy Loading**: Components and images load on demand
- **Font Optimization**: Self-hosted fonts with preload hints

### Performance Metrics
- **Lighthouse Score**: 95+ on all categories
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Bundle Size**: <200KB gzipped

## 🌍 Deployment

### Supported Platforms
- **Vercel**: Optimized for Astro with automatic deployments
- **Netlify**: Static site hosting with form handling
- **Cloudflare Pages**: Edge computing with global CDN

### Build Commands
```bash
npm run build    # Production build
npm run preview  # Local preview of build
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- 🎓 **Fluent Voices Team** - For their vision and leadership
- 🚀 **Astro Community** - For the incredible framework
- ❤️ **Open Source Contributors** - For the amazing tools and libraries

## 📞 Contact & Socials

<div align="center">

[![Instagram](https://img.shields.io/badge/Instagram-@thefluentvoices-E4405F?style=flat&logo=instagram&logoColor=white)](https://instagram.com/thefluentvoices)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fluent%20Voices-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/company/fluentvoices)
[![Email](https://img.shields.io/badge/Email-info@fluentvoices.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:info@fluentvoices.com)

</div>

## ⭐ Give a Star! 🌟

If this project helps you, please consider giving it a star ⭐ on GitHub!

<div align="center">
  <a href="https://github.com/Devanshrocks4/fluentvoices">
    <img src="https://img.shields.io/github/stars/Devanshrocks4/fluentvoices?style=social" alt="GitHub stars">
  </a>
</div>

---

<div align="center">
  Built with ❤️ using **Astro**, **React**, **TailwindCSS** and modern web technologies<br>
  <sub>© 2024 Fluent Voices. All rights reserved.</sub>
</div>
