import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPosterUrl } from '../services/tmdbApi';
import FavoriteButton from './FavoriteButton';
import WatchLaterButton from './WatchLaterButton';

const MovieCard = ({ movie }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).getFullYear();
  };

  const formatRating = (rating) => {
    return rating ? rating.toFixed(1) : 'N/A';
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins.toString().padStart(2, '0')}:00`;
  };

  return (
    <Card className="h-100 movie-card">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={getPosterUrl(movie.poster_path)}
            alt={movie.title}
            style={{ 
              height: '300px', 
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
            }}
          />
          
          {/* Play Button Overlay */}
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="play-button">
              <i className="fas fa-play"></i>
            </div>
          </div>
          
          {/* Rating Badge */}
          <div className="position-absolute top-0 end-0 m-2">
            <span className="rating-badge">
              <i className="fas fa-star me-1"></i>
              {formatRating(movie.vote_average)}
            </span>
          </div>
          
          {/* Action Buttons */}
          <div className="position-absolute top-0 start-0 m-2 d-flex gap-2">
            <FavoriteButton movie={movie} />
            <WatchLaterButton movie={movie} />
          </div>
        </div>
        
        <Card.Body className="d-flex flex-column p-3">
          <Card.Title className="h6 mb-2" style={{ 
            fontSize: '1rem',
            lineHeight: '1.3',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontWeight: '600',
            color: 'var(--text-primary)'
          }}>
            {movie.title}
          </Card.Title>
          
          <div className="movie-meta mb-2">
            <span className="small me-2" style={{ color: 'var(--text-secondary)' }}>{formatRuntime(movie.runtime)}</span>
            <span className="rating-badge small">★ {formatRating(movie.vote_average)}</span>
          </div>
          
          {/* Genre Tags */}
          <div className="genre-tags mb-2">
            {movie.genre_ids && movie.genre_ids.slice(0, 2).map((genreId, index) => (
              <span key={index} className="genre-tag small">
                {getGenreName(genreId)}
              </span>
            ))}
          </div>
        </Card.Body>
      </Link>
      
      <style jsx>{`
        .play-button {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .play-button i {
          color: #000;
          font-size: 1.2rem;
          margin-left: 2px;
        }
        
        .movie-card:hover .play-button {
          opacity: 1;
          transform: scale(1.1);
        }
        
        .genre-tags .genre-tag {
          font-size: 0.75rem;
          padding: 2px 8px;
          margin-right: 4px;
          margin-bottom: 4px;
        }
      `}</style>
    </Card>
  );
};

// Helper function to get genre name (you might want to move this to a utility file)
const getGenreName = (genreId) => {
  const genres = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
  };
  return genres[genreId] || 'Unknown';
};

export default MovieCard;
