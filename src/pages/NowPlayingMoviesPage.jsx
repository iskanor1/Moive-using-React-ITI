import React from 'react';
import MovieList from '../components/MovieList';
import { tmdbApi } from '../services/tmdbApi';

const NowPlayingMoviesPage = () => {
  return (
    <MovieList
      title="Now Playing Movies"
      fetchFunction={tmdbApi.getNowPlayingMovies}
    />
  );
};

export default NowPlayingMoviesPage;
