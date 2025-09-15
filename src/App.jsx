import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import MovieDetail from './components/MovieDetail';

// Pages - Using TMDB API
import HomePage from './pages/HomePage';
import PopularMoviesPage from './pages/PopularMoviesPage';
import TopRatedMoviesPage from './pages/TopRatedMoviesPage';
import NowPlayingMoviesPage from './pages/NowPlayingMoviesPage';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import WatchLaterPage from './pages/WatchLaterPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} user={user} onLogin={handleLogin} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/popular" element={<PopularMoviesPage />} />
            <Route path="/top-rated" element={<TopRatedMoviesPage />} />
            <Route path="/now-playing" element={<NowPlayingMoviesPage />} />
            <Route path="/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/watch-later" element={<WatchLaterPage />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
