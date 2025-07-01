# Cross-Platform Development Guide

This Tauri application is designed to run seamlessly on both Windows and Linux during development.

## Prerequisites

### Windows
- Node.js (v18+)
- Rust (latest stable)
- Microsoft C++ Build Tools
- Microsoft Edge WebView2 (usually pre-installed on Windows 11)

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  libgtk-3-dev \
  libgdk-pixbuf-2.0-dev \
  libcairo2-dev \
  libpango1.0-dev \
  libatk1.0-dev \
  libsoup-3.0-dev \
  libjavascriptcoregtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  openssl
```

### Linux (Fedora)
```bash
sudo dnf install -y \
  webkit2gtk4.1-devel \
  gtk3-devel \
  openssl-devel \
  curl \
  wget \
  file
```

## Development Commands

### Standard Development
```bash
npm install
npm run tauri:dev
```

### Platform-Specific Development (if needed)
```bash
# For Windows-specific configuration
npm run tauri:dev:windows

# For Linux-specific configuration  
npm run tauri:dev:linux

# Check current platform
npm run check-platform
```

**Note**: All scripts now use `npx @tauri-apps/cli` to ensure cross-platform compatibility and avoid global CLI conflicts.

## Common Issues & Solutions

### Linux Issues
- **WebKit errors**: Ensure all system dependencies are installed
- **Permission errors**: Check file permissions in WSL2 environments

### Windows Issues
- **WebView2 missing**: Install Microsoft Edge or WebView2 Runtime
- **Build tools missing**: Install Microsoft C++ Build Tools
- **Missing platform CLI**: If you see "Cannot find module '@tauri-apps/cli-win32-x64-msvc'", install it with `npm install --save-dev @tauri-apps/cli-win32-x64-msvc`
- **Global CLI conflicts**: If you see module not found errors, uninstall the global CLI with `npm uninstall -g @tauri-apps/cli` and use the local version via npm scripts

### Cross-Platform
- The application uses native window decorations by default
- File paths are handled automatically by Tauri
- All dependencies are cross-platform compatible

## Development Notes
- The application automatically detects the platform and uses appropriate WebView
- No platform-specific code changes needed for basic functionality
- Custom configurations per platform are available in `tauri.windows.conf.json` and `tauri.linux.conf.json`