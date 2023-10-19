import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import useAuth from 'hooks/useAuth';

let activeClassName = { color: '#e84a5f' };

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink
        className={css.link}
        to="/"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/contacts"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
