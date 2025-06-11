import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '300px' }} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
