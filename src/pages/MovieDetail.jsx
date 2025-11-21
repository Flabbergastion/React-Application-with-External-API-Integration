import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import './MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getMovieDetails(id);
      setMovie(data);
    } catch (err) {
      setError('Failed to load movie details. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="error-container">
        <p className="error-message">⚠️ {error || 'Movie not found'}</p>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    vote_average,
    vote_count,
    runtime,
    genres,
    budget,
    revenue,
    status,
    tagline,
    credits,
  } = movie;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="movie-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div
        className="movie-backdrop"
        style={{
          backgroundImage: backdrop_path
            ? `url(${api.getImageUrl(backdrop_path, 'original')})`
            : 'none',
        }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      <div className="movie-detail-content">
        <div className="movie-poster-container">
          <img
            src={api.getImageUrl(poster_path, 'w500')}
            alt={title}
            className="movie-poster"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
            }}
          />
        </div>

        <div className="movie-info">
          <h1 className="movie-title">{title}</h1>
          {tagline && <p className="movie-tagline">"{tagline}"</p>}

          <div className="movie-meta">
            <span className="meta-item">
              ⭐ {vote_average ? vote_average.toFixed(1) : 'N/A'}/10
              {vote_count && ` (${vote_count.toLocaleString()} votes)`}
            </span>
            {release_date && (
              <span className="meta-item">
                📅 {new Date(release_date).toLocaleDateString()}
              </span>
            )}
            {runtime && <span className="meta-item">⏱️ {formatRuntime(runtime)}</span>}
            {status && <span className="meta-item">📊 {status}</span>}
          </div>

          {genres && genres.length > 0 && (
            <div className="movie-genres">
              {genres.map((genre) => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <div className="movie-overview">
            <h2>Overview</h2>
            <p>{overview || 'No overview available.'}</p>
          </div>

          {(budget > 0 || revenue > 0) && (
            <div className="movie-financial">
              {budget > 0 && (
                <div className="financial-item">
                  <strong>Budget:</strong> {formatCurrency(budget)}
                </div>
              )}
              {revenue > 0 && (
                <div className="financial-item">
                  <strong>Revenue:</strong> {formatCurrency(revenue)}
                </div>
              )}
            </div>
          )}

          {credits && credits.cast && credits.cast.length > 0 && (
            <div className="movie-cast">
              <h2>Cast</h2>
              <div className="cast-grid">
                {credits.cast.slice(0, 6).map((person) => (
                  <div key={person.id} className="cast-member">
                    <img
                      src={api.getImageUrl(person.profile_path, 'w185')}
                      alt={person.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/185x278?text=No+Image';
                      }}
                    />
                    <div className="cast-info">
                      <p className="cast-name">{person.name}</p>
                      <p className="cast-character">{person.character}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
