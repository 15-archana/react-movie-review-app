import React from 'react';

const Navbar = () => (
  <nav style={styles.nav}>
    <h2 style={styles.logo}>🎥 Movie Review App</h2>
  </nav>
);

const styles = {
  nav: {
    background: '#222',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center'
  },
  logo: {
    margin: 0
  }
};

export default Navbar;
