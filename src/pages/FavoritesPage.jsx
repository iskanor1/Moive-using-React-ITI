import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your favorites...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-heart me-2"></i>
          My Favorites
        </h2>
      </div>

      {favorites.length === 0 ? (
        <Alert variant="info" className="text-center">
          <i className="fas fa-heart-broken fa-3x mb-3"></i>
          <h4>No favorites yet!</h4>
          <p>Start adding movies to your favorites by clicking the heart icon on any movie card.</p>
        </Alert>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {favorites.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FavoritesPage;
