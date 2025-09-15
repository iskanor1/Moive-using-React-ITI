import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const FavoriteButton = ({ movie, size = 'sm' }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if movie is in favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <Button
      variant="outline-danger"
      size={size}
      onClick={toggleFavorite}
      className="favorite-btn"
      style={{
        background: isFavorite ? 'var(--accent-red)' : 'transparent',
        border: `1px solid ${isFavorite ? 'var(--accent-red)' : 'var(--border-color)'}`,
        color: isFavorite ? 'white' : 'var(--text-primary)',
        transition: 'all 0.3s ease',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      <i className={`fas fa-heart ${isFavorite ? 'text-white' : ''}`}></i>
    </Button>
  );
};

export default FavoriteButton;
