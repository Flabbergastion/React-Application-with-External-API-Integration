// Using The Movie Database (TMDb) API
// Free API - No authentication required for basic usage
// You can get your own API key at: https://www.themoviedb.org/settings/api

const API_KEY = 'demo'; // Users should replace with their own key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// For demo purposes, we'll use a working demo key
// In production, this should be in environment variables
const DEMO_API_KEY = '4e44d9029b1270a757cddc766a1bcb63'; // Public demo key

export const api = {
  // Get trending movies
  getTrending: async (timeWindow = 'week') => {
    try {
      const response = await fetch(
        `${BASE_URL}/trending/movie/${timeWindow}?api_key=${DEMO_API_KEY}`
      );
      if (!response.ok) throw new Error('Failed to fetch trending movies');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      throw error;
    }
  },

  // Search for movies
  searchMovies: async (query) => {
    if (!query) return [];
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${DEMO_API_KEY}&query=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error('Failed to search movies');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  },

  // Get movie details
  getMovieDetails: async (movieId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${DEMO_API_KEY}&append_to_response=credits,videos`
      );
      if (!response.ok) throw new Error('Failed to fetch movie details');
      return await response.json();
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },

  // Get popular movies
  getPopular: async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${DEMO_API_KEY}`
      );
      if (!response.ok) throw new Error('Failed to fetch popular movies');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  },

  // Get top rated movies
  getTopRated: async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${DEMO_API_KEY}`
      );
      if (!response.ok) throw new Error('Failed to fetch top rated movies');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      throw error;
    }
  },

  // Helper to get image URL
  getImageUrl: (path, size = 'w500') => {
    if (!path) return '/placeholder-movie.png';
    return `${IMAGE_BASE_URL}/${size}${path}`;
  },
};

export default api;
