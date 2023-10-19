import AuthNav from 'components/authNav/AuthNav';
import React from 'react';
import s from './AppBar.module.css';
import Navigation from 'components/navigation/Navigation';
import UserMenu from 'components/userMenu/UserMenu';
import useAuth from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
