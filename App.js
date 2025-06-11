import React, { useEffect } from 'react';
import './App.css';
import movies from './data/movies';
import MovieCard from './components/MovieCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="navbar">
  <span className="logo">🎬 MovieVerse</span>
  <nav className="nav-links">
    <a href="#home">Home</a>
    <a href="#popular">Popular</a>
    <a href="#latest">Latest</a>
    <a href="#about">About</a>
  </nav>
</div>

      <div className="container">
        {movies.map((movie, index) => (
          <div key={index} data-aos="fade-up">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <div className="footer">© 2025 Movie Reviews</div>
    </div>
  );
}

export default App;
