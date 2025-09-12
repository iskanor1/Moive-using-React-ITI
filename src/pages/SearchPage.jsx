import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { tmdbApi } from '../services/tmdbApi';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  if (!searchQuery) {
    return (
      <div className="text-center py-5">
        <h2>Search Movies</h2>
        <p className="text-muted">Enter a search term to find movies.</p>
      </div>
    );
  }

  return (
    <MovieList
      title={`Search Results for "${searchQuery}"`}
      fetchFunction={tmdbApi.searchMovies}
      searchQuery={searchQuery}
    />
  );
};

export default SearchPage;
