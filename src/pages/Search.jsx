import { useState, useEffect } from 'react';
import api from '../services/api';
import MovieGrid from '../components/MovieGrid';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Debounce search to avoid too many API calls
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setMovies([]);
      setHasSearched(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const results = await api.searchMovies(searchQuery);
      setMovies(results);
    } catch (err) {
      setError('Failed to search movies. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Movies</h1>
        <p>Find your favorite movies by title</p>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={handleInputChange}
            autoFocus
          />
          <button type="submit" className="search-button">
            🔍 Search
          </button>
        </div>
      </form>

      <div className="search-results">
        {!hasSearched && (
          <div className="search-prompt">
            <p>Enter a movie title to start searching</p>
          </div>
        )}
        
        {hasSearched && (
          <>
            {!loading && !error && movies.length > 0 && (
              <p className="results-count">
                Found {movies.length} result{movies.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            )}
            <MovieGrid movies={movies} loading={loading} error={error} />
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
