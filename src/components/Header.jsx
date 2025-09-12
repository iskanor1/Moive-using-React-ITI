import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import UserMenu from './UserMenu';

const Header = ({ onSearch, user, onLogin, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Navbar expand="lg" className="fixed-top navbar-elevated" style={{
      backgroundColor: 'var(--navbar-bg, #212529)',
      color: 'var(--navbar-text, #ffffff)'
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand brand-hover me-3">
          <span className="brand-text">EscanorHub</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link as={NavLink} to="/" end className={({ isActive }) => `nav-link-underline ${isActive ? 'active' : ''}`}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/popular" className={({ isActive }) => `nav-link-underline ${isActive ? 'active' : ''}`}>
              Popular
            </Nav.Link>
            <Nav.Link as={NavLink} to="/top-rated" className={({ isActive }) => `nav-link-underline ${isActive ? 'active' : ''}`}>
              Top Rated
            </Nav.Link>
            <Nav.Link as={NavLink} to="/now-playing" className={({ isActive }) => `nav-link-underline ${isActive ? 'active' : ''}`}>
              Now Playing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/upcoming" className={({ isActive }) => `nav-link-underline ${isActive ? 'active' : ''}`}>
              Upcoming
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2 ms-2">
            <Form onSubmit={handleSearch} className="d-flex me-3 gap-2">
              <Form.Control
                type="search"
                placeholder="Search movies..."
                className="me-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                variant="outline-secondary" 
                type="submit"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                aria-label="Search"
              >
                Search
              </Button>
            </Form>
            <ThemeToggle />

            {user ? (
              <UserMenu user={user} onLogout={onLogout} />
            ) : (
              <div className="d-flex ms-3 gap-2">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => setShowLogin(true)}
                  className="me-2"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => setShowRegister(true)}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>

      <LoginModal 
        show={showLogin} 
        onHide={() => setShowLogin(false)} 
        onLogin={onLogin}
      />
      <RegisterModal 
        show={showRegister} 
        onHide={() => setShowRegister(false)} 
        onRegister={onLogin}
      />
    </Navbar>
  );
};

export default Header;
