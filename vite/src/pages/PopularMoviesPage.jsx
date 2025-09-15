import React from 'react';
import MovieList from '../components/MovieList';
import { tmdbApi } from '../services/tmdbApi';

const PopularMoviesPage = () => {
  return (
    <MovieList
      title="Popular Movies"
      fetchFunction={tmdbApi.getPopularMovies}
    />
  );
};

export default PopularMoviesPage;
