import axios from 'axios';

// TMDB API configuration
const API_KEY = 'f92c469d56e28127dffb25194fa5705c'; // Your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// TMDB API service
export const tmdbApi = {
  // Get popular movies
  getPopularMovies: async (page = 1) => {
    try {
      const response = await api.get('/movie/popular', {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  },

  // Get top rated movies
  getTopRatedMovies: async (page = 1) => {
    try {
      const response = await api.get('/movie/top_rated', {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      throw error;
    }
  },

  // Get now playing movies
  getNowPlayingMovies: async (page = 1) => {
    try {
      const response = await api.get('/movie/now_playing', {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
      throw error;
    }
  },

  // Get upcoming movies
  getUpcomingMovies: async (page = 1) => {
    try {
      const response = await api.get('/movie/upcoming', {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      throw error;
    }
  },

  // Search movies
  searchMovies: async (query, page = 1) => {
    try {
      const response = await api.get('/search/movie', {
        params: { query, page }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  },

  // Get movie details
  getMovieDetails: async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },

  // Get movie credits
  getMovieCredits: async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}/credits`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie credits:', error);
      throw error;
    }
  },

  // Get movie reviews
  getMovieReviews: async (movieId, page = 1) => {
    try {
      const response = await api.get(`/movie/${movieId}/reviews`, {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
      throw error;
    }
  },

  // Get movie videos (trailers)
  getMovieVideos: async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}/videos`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie videos:', error);
      throw error;
    }
  },

  // Get similar movies
  getSimilarMovies: async (movieId, page = 1) => {
    try {
      const response = await api.get(`/movie/${movieId}/similar`, {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching similar movies:', error);
      throw error;
    }
  },

  // Get movie genres
  getGenres: async () => {
    try {
      const response = await api.get('/genre/movie/list');
      return response.data;
    } catch (error) {
      console.error('Error fetching genres:', error);
      throw error;
    }
  },

  // Get movies by genre
  getMoviesByGenre: async (genreId, page = 1) => {
    try {
      const response = await api.get('/discover/movie', {
        params: { 
          with_genres: genreId,
          page 
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      throw error;
    }
  },

  // Get trending movies
  getTrendingMovies: async (timeWindow = 'week', page = 1) => {
    try {
      const response = await api.get(`/trending/movie/${timeWindow}`, {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      throw error;
    }
  },

  // Get movie recommendations
  getMovieRecommendations: async (movieId, page = 1) => {
    try {
      const response = await api.get(`/movie/${movieId}/recommendations`, {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
      throw error;
    }
  }
};

// Utility functions for image URLs
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return 'https://via.placeholder.com/300x450?text=No+Image';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path, size = 'w1280') => {
  if (!path) return 'https://via.placeholder.com/1280x720?text=No+Image';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getPosterUrl = (path, size = 'w500') => {
  if (!path) return 'https://via.placeholder.com/300x450?text=No+Image';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export default tmdbApi;
