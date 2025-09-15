import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const WatchLaterButton = ({ movie, size = 'sm' }) => {
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    // Check if movie is in watch later list
    const watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');
    setIsWatchLater(watchLater.some(item => item.id === movie.id));
  }, [movie.id]);

  const toggleWatchLater = () => {
    const watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');
    
    if (isWatchLater) {
      // Remove from watch later
      const updatedWatchLater = watchLater.filter(item => item.id !== movie.id);
      localStorage.setItem('watchLater', JSON.stringify(updatedWatchLater));
      setIsWatchLater(false);
    } else {
      // Add to watch later
      const updatedWatchLater = [...watchLater, movie];
      localStorage.setItem('watchLater', JSON.stringify(updatedWatchLater));
      setIsWatchLater(true);
    }
  };

  return (
    <Button
      variant="outline-primary"
      size={size}
      onClick={toggleWatchLater}
      className="watch-later-btn"
      style={{
        background: isWatchLater ? 'var(--accent-blue)' : 'transparent',
        border: `1px solid ${isWatchLater ? 'var(--accent-blue)' : 'var(--border-color)'}`,
        color: isWatchLater ? 'white' : 'var(--text-primary)',
        transition: 'all 0.3s ease',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      title={isWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
    >
      <i className={`fas fa-clock ${isWatchLater ? 'text-white' : ''}`}></i>
    </Button>
  );
};

export default WatchLaterButton;
