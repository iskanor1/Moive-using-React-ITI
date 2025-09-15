import React from 'react';
import MovieList from '../components/MovieList';
import { tmdbApi } from '../services/tmdbApi';

const TopRatedMoviesPage = () => {
  return (
    <MovieList
      title="Top Rated Movies"
      fetchFunction={tmdbApi.getTopRatedMovies}
    />
  );
};

export default TopRatedMoviesPage;
