import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserMenu = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    onLogout();
    setShowDropdown(false);
  };

  if (!user) {
    return null;
  }

  return (
    <Dropdown show={showDropdown} onToggle={setShowDropdown}>
      <Dropdown.Toggle
        as={Button}
        variant="outline-secondary"
        className="user-menu-btn"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
          padding: '8px 12px'
        }}
      >
        <i className="fas fa-user-circle me-2"></i>
        {user.name}
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <Dropdown.Item
          as={Link}
          to="/favorites"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setShowDropdown(false)}
        >
          <i className="fas fa-heart me-2"></i>
          My Favorites
        </Dropdown.Item>
        
        <Dropdown.Item
          as={Link}
          to="/watch-later"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setShowDropdown(false)}
        >
          <i className="fas fa-clock me-2"></i>
          Watch Later
        </Dropdown.Item>
        
        <Dropdown.Divider style={{ borderColor: 'var(--border-color)' }} />
        
        <Dropdown.Item
          onClick={handleLogout}
          style={{ color: 'var(--accent-red)' }}
        >
          <i className="fas fa-sign-out-alt me-2"></i>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
