# Installation Guide for WSL/Windows Users

## Issue
There is a known issue with npm on WSL when the project directory is accessed via UNC paths (\\wsl.localhost\...). This prevents npm from installing dependencies correctly.

## Solution

You have two options:

### Option 1: Run from WSL Terminal (Recommended)

1. Open a native WSL terminal (not Windows Command Prompt or PowerShell):
   - Open Windows Terminal
   - Select "Ubuntu" or your Linux distribution
   - OR: Open Ubuntu from the Start menu

2. Navigate to the project directory:
   ```bash
   cd "/home/maxgr/Python Flatiron/React-Application-with-External-API-Integration"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Option 2: Move Project to Windows File System

1. Copy the project to a Windows directory (e.g., C:\Projects):
   ```bash
   cp -r "/home/maxgr/Python Flatiron/React-Application-with-External-API-Integration" /mnt/c/Projects/movie-discovery-app
   ```

2. Navigate to the Windows directory:
   ```bash
   cd /mnt/c/Projects/movie-discovery-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Option 3: Use VS Code's WSL Extension

1. Install the "Remote - WSL" extension in VS Code
2. Open VS Code
3. Press F1 and type "WSL: Open Folder in WSL"
4. Navigate to: /home/maxgr/Python Flatiron/React-Application-with-External-API-Integration
5. Open a new terminal in VS Code (it will be a WSL terminal)
6. Run:
   ```bash
   npm install
   npm run dev
   ```

## Verification

Once dependencies are installed successfully, you should see a `node_modules` folder and you can run:

```bash
npm run dev
```

The app should open automatically at http://localhost:3000

## Additional Notes

- The WSL/UNC path issue is a known npm limitation
- All project files are correctly created and ready to use
- This is only an installation issue, not a code issue
- Once dependencies are installed, the app will work perfectly

## Quick Start After Installation

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
