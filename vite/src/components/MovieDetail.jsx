import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Badge, 
  Button, 
  Spinner, 
  Alert,
  Tab,
  Tabs,
  ListGroup,
  Modal
} from 'react-bootstrap';
import { tmdbApi, getBackdropUrl, getPosterUrl } from '../services/tmdbApi';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const [movieData, creditsData, reviewsData, similarData, videosData] = await Promise.all([
        tmdbApi.getMovieDetails(id),
        tmdbApi.getMovieCredits(id),
        tmdbApi.getMovieReviews(id),
        tmdbApi.getSimilarMovies(id),
        tmdbApi.getMovieVideos(id)
      ]);

      setMovie(movieData);
      setCredits(creditsData);
      setReviews(reviewsData);
      setSimilarMovies(similarData);
      setVideos(videosData);
    } catch (err) {
      setError('Failed to fetch movie details. Please try again.');
      console.error('Error fetching movie details:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatCurrency = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const openTrailer = (video) => {
    setSelectedVideo(video);
    setShowTrailer(true);
  };

  const getTrailerVideo = () => {
    if (!videos?.results) return null;
    return videos.results.find(video => 
      video.type === 'Trailer' && video.site === 'YouTube'
    ) || videos.results[0];
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading movie details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container>
        <Alert variant="warning" className="mt-4">
          Movie not found.
        </Alert>
      </Container>
    );
  }

  const trailer = getTrailerVideo();

  return (
    <div>
      {/* Hero Section with Backdrop */}
      <div 
        className="position-relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${getBackdropUrl(movie.backdrop_path, 'w1920')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center text-lg-start">
              <img
                src={getPosterUrl(movie.poster_path, 'w500')}
                alt={movie.title}
                className="img-fluid rounded shadow-lg mb-4 mb-lg-0"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                }}
              />
            </Col>
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {movie.genres?.map(genre => (
                  <Badge key={genre.id} bg="secondary" className="fs-6">
                    {genre.name}
                  </Badge>
                ))}
              </div>
              <p className="lead mb-4">{movie.overview}</p>
              
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <strong>Release Date:</strong> {movie.release_date || 'N/A'}
                </div>
                <div className="col-sm-6">
                  <strong>Runtime:</strong> {formatRuntime(movie.runtime)}
                </div>
                <div className="col-sm-6">
                  <strong>Rating:</strong> ⭐ {movie.vote_average?.toFixed(1)}/10
                </div>
                <div className="col-sm-6">
                  <strong>Budget:</strong> {formatCurrency(movie.budget)}
                </div>
              </div>

              {trailer && (
                <Button 
                  variant="danger" 
                  size="lg"
                  onClick={() => openTrailer(trailer)}
                  className="me-3"
                >
                  ▶ Watch Trailer
                </Button>
              )}
              
              <Button 
                variant="outline-light" 
                size="lg"
                as={Link}
                to="/"
              >
                ← Back to Movies
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Detailed Information */}
      <Container className="py-5">
        <Tabs defaultActiveKey="cast" id="movie-tabs" className="mb-4">
          <Tab eventKey="cast" title="Cast & Crew">
            <Row className="mt-4">
              <Col md={6}>
                <h4>Cast</h4>
                <ListGroup>
                  {credits?.cast?.slice(0, 10).map(actor => (
                    <ListGroup.Item key={actor.id} className="d-flex justify-content-between">
                      <div>
                        <strong>{actor.name}</strong>
                        <br />
                        <small className="text-muted">{actor.character}</small>
                      </div>
                      <img
                        src={getPosterUrl(actor.profile_path, 'w185')}
                        alt={actor.name}
                        style={{ width: '50px', height: '75px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/50x75?text=No+Image';
                        }}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md={6}>
                <h4>Crew</h4>
                <ListGroup>
                  {credits?.crew?.slice(0, 10).map(member => (
                    <ListGroup.Item key={member.id}>
                      <strong>{member.name}</strong>
                      <br />
                      <small className="text-muted">{member.job}</small>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="reviews" title="Reviews">
            <div className="mt-4">
              {reviews?.results?.length > 0 ? (
                reviews.results.slice(0, 5).map(review => (
                  <Card key={review.id} className="mb-3">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0">{review.author}</h6>
                        <Badge bg="info">
                          ⭐ {review.author_details?.rating || 'N/A'}
                        </Badge>
                      </div>
                      <p className="text-muted small mb-2">
                        {new Date(review.created_at).toLocaleDateString()}
                      </p>
                      <p>{review.content}</p>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <Alert variant="info">No reviews available for this movie.</Alert>
              )}
            </div>
          </Tab>

          <Tab eventKey="similar" title="Similar Movies">
            <Row className="mt-4">
              {similarMovies?.results?.slice(0, 8).map(movie => (
                <Col md={3} sm={6} key={movie.id} className="mb-4">
                  <Card className="h-100">
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Card.Img
                        variant="top"
                        src={getPosterUrl(movie.poster_path)}
                        alt={movie.title}
                        style={{ height: '300px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                        }}
                      />
                      <Card.Body>
                        <Card.Title className="h6">{movie.title}</Card.Title>
                        <Badge bg="warning" text="dark">
                          ⭐ {movie.vote_average?.toFixed(1)}
                        </Badge>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>

      {/* Trailer Modal */}
      <Modal show={showTrailer} onHide={() => setShowTrailer(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedVideo?.name || 'Trailer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVideo && (
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.key}`}
                title={selectedVideo.name}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieDetail;
