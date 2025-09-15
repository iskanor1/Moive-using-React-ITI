import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MovieList from '../components/MovieList';
import { tmdbApi, getBackdropUrl } from '../services/tmdbApi';
import FavoriteButton from '../components/FavoriteButton';
import WatchLaterButton from '../components/WatchLaterButton';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedMovie();
  }, []);

  const fetchFeaturedMovie = async () => {
    try {
      const response = await tmdbApi.getPopularMovies(1);
      if (response.results && response.results.length > 0) {
        setFeaturedMovie(response.results[0]);
      }
    } catch (error) {
      console.error('Error fetching featured movie:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const formatGenres = (genres) => {
    if (!genres || genres.length === 0) return [];
    return genres.slice(0, 3).map(genre => genre.name);
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins.toString().padStart(2, '0')}:00`;
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {/* Hero Banner */}
      {featuredMovie && (
        <div 
          className="hero-banner"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(${getBackdropUrl(featuredMovie.backdrop_path, 'w1920')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Container>
            <Row className="align-items-center h-100">
              <Col lg={6}>
                <div className="hero-content">
                  <h1 className="hero-title">{featuredMovie.title}</h1>
                  
                  <div className="mb-3">
                    {formatGenres(featuredMovie.genre_ids).map((genre, index) => (
                      <span key={index} className="genre-tag">
                        {genre}
                      </span>
                    ))}
                    <span className="ms-3" style={{ color: 'white' }}>{featuredMovie.release_date?.split('-')[0]}</span>
                    <span className="ms-3" style={{ color: 'white' }}>{formatRuntime(featuredMovie.runtime)}</span>
                    <span className="rating-badge ms-3">★ {featuredMovie.vote_average?.toFixed(1)}</span>
                  </div>
                  
                  <p className="hero-description">
                    {featuredMovie.overview}
                  </p>
                  
                  <div className="d-flex align-items-center gap-3">
                    <Button className="btn-watch-now">
                      <i className="fas fa-play me-2"></i>
                      Watch Now
                    </Button>
                    <WatchLaterButton movie={featuredMovie} size="lg" />
                    <FavoriteButton movie={featuredMovie} size="lg" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      <Container className="py-5">
        {/* Recently Updated Section */}
        <div className="section-header">
          <h2 className="section-title">Recently Updated</h2>
          <a href="#" className="view-all-link">View all →</a>
        </div>
        <MovieList
          title=""
          fetchFunction={tmdbApi.getNowPlayingMovies}
          showPagination={false}
        />

        {/* Trending Section */}
        <div className="section-header mt-5">
          <h2 className="section-title">Trending</h2>
          <a href="#" className="view-all-link">View all →</a>
        </div>
        <MovieList
          title=""
          fetchFunction={tmdbApi.getTrendingMovies}
          showPagination={false}
        />

        {/* New Release Movies Section */}
        <div className="section-header mt-5">
          <h2 className="section-title">New Release - Movies</h2>
          <a href="#" className="view-all-link">View all →</a>
        </div>
        <MovieList
          title=""
          fetchFunction={tmdbApi.getUpcomingMovies}
          showPagination={false}
        />

        {/* Popular Movies Section */}
        <div className="section-header mt-5">
          <h2 className="section-title">Popular Movies</h2>
          <a href="#" className="view-all-link">View all →</a>
        </div>
        <MovieList
          title=""
          fetchFunction={tmdbApi.getPopularMovies}
          showPagination={false}
        />
      </Container>
    </div>
  );
};

export default HomePage;
