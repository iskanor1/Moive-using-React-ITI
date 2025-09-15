import React from 'react';
import MovieList from '../components/MovieList';
import { tmdbApi } from '../services/tmdbApi';

const UpcomingMoviesPage = () => {
  return (
    <MovieList
      title="Upcoming Movies"
      fetchFunction={tmdbApi.getUpcomingMovies}
    />
  );
};

export default UpcomingMoviesPage;
