import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

const WatchLaterPage = () => {
  const [watchLater, setWatchLater] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const watchLaterData = JSON.parse(localStorage.getItem('watchLater') || '[]');
    setWatchLater(watchLaterData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your watch later list...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-clock me-2"></i>
          Watch Later
        </h2>
      </div>

      {watchLater.length === 0 ? (
        <Alert variant="info" className="text-center">
          <i className="fas fa-clock fa-3x mb-3"></i>
          <h4>Your watch later list is empty!</h4>
          <p>Add movies to your watch later list by clicking the clock icon on any movie card.</p>
        </Alert>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {watchLater.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default WatchLaterPage;
