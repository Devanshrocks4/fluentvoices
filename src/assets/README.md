# Assets Directory Structure

This directory contains UI/design elements and images used throughout the application.

## Folder Organization

```
/src/assets/
├── images/
│   ├── logos/          # Logo files and brand assets
│   ├── icons/          # Icon files
│   ├── backgrounds/    # Background images
│   └── illustrations/  # Illustration assets
├── README.md           # This file
```

## Usage

Import images from this directory in your components:

```typescript
import logoImage from '@/assets/images/logos/logo.png';
```

## Static Images

For static images that should be served directly, use `/public/images/`:

```
/public/images/
├── logos/
├── icons/
├── backgrounds/
└── illustrations/
```

Reference public images directly in your code:

```typescript
<Image src="/images/logos/logo.png" alt="Logo" />
```

## Image Guidelines

- Keep images optimized and compressed
- Use appropriate formats (PNG for transparency, JPG for photos, SVG for icons)
- Organize by category for easy maintenance
- Update this README when adding new categories
