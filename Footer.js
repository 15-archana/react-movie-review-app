import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <p>&copy; 2025 Movie Review App | Built with ❤️ in React</p>
  </footer>
);

const styles = {
  footer: {
    background: '#222',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem'
  }
};

export default Footer;
