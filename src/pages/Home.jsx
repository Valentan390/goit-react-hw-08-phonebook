import React from 'react';

const styles = {
  container: {
    // minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'red',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to the contacts app{' '}
        <span role="img" aria-label="Greeting icon">
          ☎️📞🤙
        </span>
      </h1>
    </div>
  );
};

export default Home;
