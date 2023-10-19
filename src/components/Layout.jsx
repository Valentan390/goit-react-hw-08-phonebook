import React, { Suspense } from 'react';
import AppBar from './appBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 16px',
        backgroundColor: 'cyan',
        paddingBottom: '28px',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};

export default Layout;
