import React from 'react';
import movies from '../data/movies';
import MovieCard from '../components/MovieCard';

const Home = () => {
  return (
    <div>
      <h2>All Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
