import { useState, useEffect } from 'react';
import api from '../services/api';
import MovieGrid from '../components/MovieGrid';
import './Home.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('trending');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const [trending, popular, topRated] = await Promise.all([
        api.getTrending(),
        api.getPopular(),
        api.getTopRated(),
      ]);
      setTrendingMovies(trending);
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
    } catch (err) {
      setError('Failed to load movies. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getActiveMovies = () => {
    switch (activeTab) {
      case 'trending':
        return trendingMovies;
      case 'popular':
        return popularMovies;
      case 'topRated':
        return topRatedMovies;
      default:
        return trendingMovies;
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover Amazing Movies</h1>
          <p className="hero-subtitle">
            Explore trending, popular, and top-rated movies from around the world
          </p>
        </div>
      </section>

      <section className="movies-section">
        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            🔥 Trending
          </button>
          <button
            className={`tab-button ${activeTab === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveTab('popular')}
          >
            📈 Popular
          </button>
          <button
            className={`tab-button ${activeTab === 'topRated' ? 'active' : ''}`}
            onClick={() => setActiveTab('topRated')}
          >
            ⭐ Top Rated
          </button>
        </div>

        <MovieGrid movies={getActiveMovies()} loading={loading} error={error} />
      </section>
    </div>
  );
}

export default Home;
