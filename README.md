# Tauri + Vite + React + Tailwind + shadcn/ui Template

A production-ready starter template featuring the latest stable versions of:

- **Tauri v2.0+** - Build modern desktop applications
- **Vite v7.0+** - Lightning-fast build tool and dev server
- **React v19.1+** - Latest React with TypeScript
- **Tailwind CSS v4.1+** - Utility-first CSS framework with Vite plugin
- **shadcn/ui** - Beautiful, accessible components built on Radix UI

## Features

- ⚡ **Fast Development** - Vite's blazing fast HMR and build process
- 🎨 **Modern Styling** - Tailwind CSS v4 with optimized Vite integration
- 🧩 **Component Library** - shadcn/ui components with proper TypeScript support
- 📱 **Desktop Native** - Tauri for cross-platform desktop applications
- 🛠 **TypeScript** - Full type safety with path aliases configured
- 🔧 **ESLint** - Code quality and consistency
- 🏗 **Production Ready** - Optimized build configuration

## Getting Started

### Prerequisites

1. **Node.js** (v20.10.0 or higher)
2. **Rust** (latest stable)
3. **System Dependencies**:
   - **Linux**: `libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev`
   - **macOS**: Xcode Command Line Tools
   - **Windows**: WebView2 (usually pre-installed)

### Installation

```bash
# Clone or download this template
cd tauri-shadcn-tailwind

# Install dependencies
npm install
```

### Development

```bash
# Start development server (opens desktop app)
npm run tauri:dev

# Or start web-only development
npm run dev
```

### Building

```bash
# Build for production
npm run tauri:build

# Build web-only
npm run build
```

### Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build web application
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run tauri:dev` - Start Tauri development mode
- `npm run tauri:build` - Build Tauri application for production

## Project Structure

```
tauri-shadcn-tailwind/
├── src/                      # React TypeScript frontend
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # React entry point
│   └── index.css            # Tailwind CSS imports
├── src-tauri/               # Rust backend
│   ├── src/
│   │   └── main.rs          # Tauri app entry point
│   ├── Cargo.toml           # Rust dependencies
│   └── tauri.conf.json      # Tauri configuration
├── components.json          # shadcn/ui configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration (optional)
└── tsconfig.json            # TypeScript configuration
```

## Configuration

### Path Aliases

The template is configured with `@/*` path aliases pointing to `./src/*`:

```typescript
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
```

### Tailwind CSS v4

Uses the latest Tailwind CSS v4 with the optimized Vite plugin:

```typescript
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // ...
})
```

### shadcn/ui

Components are configured to use the `@/components/ui` alias:

```bash
# Add new components
npx shadcn@latest add [component-name]
```

## Customization

### Adding Components

```bash
# Add specific shadcn/ui components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# ... etc
```

### Theming

Modify the CSS variables in `src/index.css` or use the Tailwind configuration for custom themes.

### Tauri Configuration

Edit `src-tauri/tauri.conf.json` to customize:
- Window properties
- Application metadata
- Build settings
- Security policies

## License

This template is provided as-is for educational and development purposes.
