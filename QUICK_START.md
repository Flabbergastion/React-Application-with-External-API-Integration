# 🚀 Quick Start Guide

## First Time Setup

### Step 1: Install Dependencies

Choose the method that works for your environment:

**Option A: Native WSL Terminal (Recommended)**
```bash
# Open Ubuntu terminal from Start menu or Windows Terminal
cd "/home/maxgr/Python Flatiron/React-Application-with-External-API-Integration"
npm install
```

**Option B: Use Setup Script**
```bash
./setup.sh
```

**Option C: VS Code with WSL Extension**
1. Install "Remote - WSL" extension
2. F1 → "WSL: Open Folder in WSL"
3. Open terminal in VS Code
4. Run `npm install`

### Step 2: Start Development Server
```bash
npm run dev
```

App opens at: http://localhost:3000

## Daily Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure at a Glance

```
src/
├── components/     # Reusable components
│   ├── Navbar      # Navigation
│   ├── MovieCard   # Movie cards
│   └── MovieGrid   # Grid layout
├── pages/          # Page components
│   ├── Home        # Trending/Popular/Top Rated
│   ├── Search      # Movie search
│   └── MovieDetail # Movie details
└── services/       # API layer
    └── api.js      # TMDb API calls
```

## Features Implemented ✅

1. **Browse Movies** - Trending, Popular, Top Rated
2. **Search Movies** - Real-time search
3. **View Details** - Full movie information
4. **Responsive Design** - Works on all devices
5. **Loading States** - Visual feedback
6. **Error Handling** - User-friendly messages

## API Information

- **API**: The Movie Database (TMDb)
- **Authentication**: API key (included)
- **Endpoints**: 5 endpoints implemented
- **Rate Limit**: 40 requests per 10 seconds

## Push to GitHub

```bash
git add .
git commit -m "Complete Movie Discovery App"
git push origin main
```

## Deploy (Optional)

### Netlify
```bash
npm run build
netlify deploy --prod
```

### Vercel
```bash
vercel --prod
```

## Troubleshooting

**Can't install dependencies?**
→ See `INSTALLATION.md`

**App won't start?**
→ Make sure dependencies are installed
→ Check if port 3000 is available

**API not working?**
→ Check internet connection
→ TMDb API may be experiencing issues

## Documentation Files

- `README.md` - Full project documentation
- `INSTALLATION.md` - Installation troubleshooting
- `GIT_INSTRUCTIONS.md` - Git and deployment guide
- `PROJECT_CHECKLIST.md` - Requirements verification
- `QUICK_START.md` - This file

## Need Help?

All documentation is in the root directory. Check:
1. `README.md` for comprehensive info
2. `INSTALLATION.md` for setup issues
3. `PROJECT_CHECKLIST.md` to verify completion

---

**You're all set! Happy coding! 🎬**
