import MovieCard from './MovieCard';
import './MovieGrid.css';

function MovieGrid({ movies, loading, error }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">⚠️ {error}</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="no-results">
        <p>No movies found. Try a different search!</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
