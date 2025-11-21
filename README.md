# 🎬 Movie Discovery App

A modern, responsive React application that allows users to discover, search, and explore movies using The Movie Database (TMDb) API. Built with React, React Router, and Vite for optimal performance and user experience.

![Movie Discovery App](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.2-purple)
![React Router](https://img.shields.io/badge/React%20Router-6.26.0-red)

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [API Information](#api-information)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Challenges & Solutions](#challenges--solutions)
- [Known Issues](#known-issues)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## ✨ Features

### Core Functionality
- **Browse Movies**: View trending, popular, and top-rated movies
- **Search Movies**: Search for movies by title with real-time results
- **Movie Details**: View comprehensive information about each movie including:
  - Synopsis and overview
  - Release date and runtime
  - Ratings and vote counts
  - Budget and revenue information
  - Cast members with photos
  - Movie genres and status
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dynamic Routing**: Client-side routing with React Router for smooth navigation
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Graceful error handling with user-friendly messages

### User Experience
- Tab-based navigation on home page (Trending, Popular, Top Rated)
- Debounced search to minimize API calls
- Hover effects and smooth animations
- Movie card overlays with descriptions
- Backdrop images on detail pages
- Sticky navigation bar

## 🎥 Demo

### Home Page
Browse trending, popular, and top-rated movies with an elegant card-based layout.

### Search Page
Real-time movie search with instant results as you type.

### Movie Detail Page
Comprehensive movie information with cast, ratings, and financial data.

## 🔌 API Information

### API Used
**The Movie Database (TMDb) API**
- **Website**: [https://www.themoviedb.org/](https://www.themoviedb.org/)
- **Documentation**: [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)
- **Type**: Public REST API
- **Authentication**: API Key (included for demo purposes)

### Endpoints Used

1. **Trending Movies**
   - `GET /trending/movie/{time_window}`
   - Fetches trending movies (daily or weekly)

2. **Popular Movies**
   - `GET /movie/popular`
   - Retrieves currently popular movies

3. **Top Rated Movies**
   - `GET /movie/top_rated`
   - Returns highest-rated movies

4. **Search Movies**
   - `GET /search/movie`
   - Searches for movies by title

5. **Movie Details**
   - `GET /movie/{movie_id}`
   - Retrieves detailed information about a specific movie
   - Appends: credits (cast/crew) and videos

### Rate Limits
- Free tier allows 40 requests per 10 seconds
- App implements debouncing to respect rate limits

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Flabbergastion/React-Application-with-External-API-Integration.git
   cd React-Application-with-External-API-Integration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to the URL

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
React-Application-with-External-API-Integration/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Navbar.css
│   │   ├── MovieCard.jsx       # Individual movie card
│   │   ├── MovieCard.css
│   │   ├── MovieGrid.jsx       # Grid layout for movies
│   │   └── MovieGrid.css
│   ├── pages/
│   │   ├── Home.jsx            # Home page with tabs
│   │   ├── Home.css
│   │   ├── Search.jsx          # Search functionality
│   │   ├── Search.css
│   │   ├── MovieDetail.jsx     # Detailed movie view
│   │   └── MovieDetail.css
│   ├── services/
│   │   └── api.js              # API service layer
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠 Technologies Used

### Core Technologies
- **React 18.3.1**: UI library for building component-based interfaces
- **React Router 6.26.0**: Client-side routing
- **Vite 5.4.2**: Build tool and development server

### API & Data Fetching
- **Fetch API**: Native browser API for HTTP requests
- **TMDb API**: External movie database API

### Styling
- **CSS3**: Modern CSS with custom properties (variables)
- **Flexbox & Grid**: Responsive layouts
- **CSS Animations**: Smooth transitions and hover effects

### Development Tools
- **ES6+ JavaScript**: Modern JavaScript features
- **React Hooks**: useState, useEffect for state management
- **Async/Await**: Clean asynchronous code

## 💡 Challenges & Solutions

### 1. API Rate Limiting
**Challenge**: TMDb API has rate limits that could be exceeded with rapid searches.

**Solution**: Implemented debouncing in the search component with a 500ms delay. This reduces API calls while typing and provides a better user experience.

```javascript
useEffect(() => {
  const timeoutId = setTimeout(() => {
    handleSearch();
  }, 500);
  return () => clearTimeout(timeoutId);
}, [searchQuery]);
```

### 2. State Management Across Components
**Challenge**: Managing multiple movie lists (trending, popular, top-rated) efficiently.

**Solution**: Used React's useState hook with Promise.all() to fetch all data concurrently, improving load times.

### 3. Image Loading & Error Handling
**Challenge**: Some movies don't have poster images, causing broken image links.

**Solution**: Implemented onError handlers with placeholder images and proper fallback URLs.

### 4. Responsive Design
**Challenge**: Creating a layout that works well on all screen sizes.

**Solution**: Used CSS Grid with auto-fill and minmax() for responsive card layouts, plus media queries for fine-tuning.

### 5. Deep Linking to Movie Details
**Challenge**: Users need to be able to share direct links to movie pages.

**Solution**: Implemented dynamic routing with React Router using movie IDs in the URL path (`/movie/:id`).

## 🐛 Known Issues

### Minor Issues
1. **API Key Exposure**: The demo API key is embedded in the code. In production, this should be in environment variables and proxied through a backend.

2. **Limited Error Recovery**: Network errors show a message but don't auto-retry. Users must manually refresh.

3. **No Pagination**: Only shows the first page of results (typically 20 items) for each category.

4. **Cast Photos**: Some cast members may not have profile photos, showing placeholder images.

### Browser Compatibility
- Tested on Chrome, Firefox, Safari, and Edge (latest versions)
- IE11 not supported (requires polyfills for modern features)

## 🚀 Future Enhancements

### Planned Features
- [ ] User authentication and favorites list
- [ ] Movie trailers and video playback
- [ ] Pagination for search results
- [ ] Advanced filtering (genre, year, rating)
- [ ] Dark/Light theme toggle
- [ ] Movie recommendations
- [ ] Social sharing features
- [ ] Watchlist functionality
- [ ] Reviews and ratings integration
- [ ] Offline support with service workers

### Technical Improvements
- [ ] Environment variables for API keys
- [ ] Backend proxy for API calls
- [ ] Unit and integration tests
- [ ] Performance optimization with React.memo
- [ ] Lazy loading for images
- [ ] Code splitting for routes
- [ ] SEO optimization
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)

## 📝 Development Notes

### Component Architecture
The app follows a component-based architecture with clear separation of concerns:
- **Presentational Components**: MovieCard, MovieGrid, Navbar
- **Container Components**: Home, Search, MovieDetail
- **Service Layer**: API calls isolated in services/api.js

### State Management
Currently using React's built-in useState and useEffect hooks. For future scaling, consider:
- Context API for global state
- Redux for complex state management
- React Query for server state caching

### Styling Approach
Uses CSS Modules pattern with component-specific stylesheets. Global styles in index.css include:
- CSS custom properties for theming
- Consistent naming conventions
- Mobile-first responsive design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the excellent API
- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://react.dev/) team for the fantastic library
- [React Router](https://reactrouter.com/) for routing solution

## 📧 Contact

Project Link: [https://github.com/Flabbergastion/React-Application-with-External-API-Integration](https://github.com/Flabbergastion/React-Application-with-External-API-Integration)

---

**Note**: This project was created as part of a React development challenge to demonstrate skills in component architecture, API integration, routing, state management, and modern UI design.