#!/bin/bash

# Movie Discovery App - Setup Script
# This script helps set up the project correctly

echo "🎬 Movie Discovery App - Setup Script"
echo "======================================"
echo ""

# Check if we're in WSL
if grep -q Microsoft /proc/version; then
    echo "✓ Running in WSL"
    echo ""
    
    # Check if we're accessing via UNC path
    if pwd | grep -q "^/mnt/c"; then
        echo "✓ Project is on Windows file system - Good!"
    else
        echo "⚠️  Warning: You're running from WSL file system"
        echo "   This may cause issues with npm on Windows/WSL"
        echo ""
        echo "   Recommended: Copy project to /mnt/c/Projects/"
        echo ""
        read -p "   Continue anyway? (y/n) " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
else
    echo "✓ Running on native Linux or macOS"
fi

echo ""
echo "📦 Installing dependencies..."
echo ""

# Remove existing node_modules and lock file
if [ -d "node_modules" ]; then
    echo "Removing existing node_modules..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    echo "Removing package-lock.json..."
    rm -f package-lock.json
fi

# Install dependencies
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ Dependencies installed successfully!"
    echo ""
    echo "🚀 You can now run the app with:"
    echo "   npm run dev"
    echo ""
    echo "📚 Other available commands:"
    echo "   npm run build   - Build for production"
    echo "   npm run preview - Preview production build"
    echo ""
else
    echo ""
    echo "❌ Installation failed!"
    echo ""
    echo "Please see INSTALLATION.md for troubleshooting steps."
    echo ""
    exit 1
fi
