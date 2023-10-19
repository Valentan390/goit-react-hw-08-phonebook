import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

let activeClassName = { color: '#e84a5f' };

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={s.link}
        to="/register"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Register
      </NavLink>
      <NavLink
        className={s.link}
        to="/login"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
