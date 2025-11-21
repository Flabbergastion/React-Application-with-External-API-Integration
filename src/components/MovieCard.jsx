import { Link } from 'react-router-dom';
import api from '../services/api';
import './MovieCard.css';

function MovieCard({ movie }) {
  const { id, title, poster_path, release_date, vote_average, overview } = movie;

  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <div className="movie-card-image">
        <img
          src={api.getImageUrl(poster_path)}
          alt={title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
          }}
        />
        <div className="movie-card-overlay">
          <p className="movie-card-overview">
            {overview ? overview.substring(0, 150) + '...' : 'No description available'}
          </p>
        </div>
      </div>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{title}</h3>
        <div className="movie-card-details">
          <span className="movie-card-year">
            {release_date ? new Date(release_date).getFullYear() : 'N/A'}
          </span>
          <span className="movie-card-rating">
            ⭐ {vote_average ? vote_average.toFixed(1) : 'N/A'}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
