import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [review, setReview] = useState('');
  const [submittedReview, setSubmittedReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedReview(review);
    setReview('');
  };

  const placeholderImage = "https://via.placeholder.com/300x350?text=No+Image";
  const poster = movie.posterUrl ? movie.posterUrl : placeholderImage;

  return (
    <div className="card">
      <img src={poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedReview && <p><strong>Your Review:</strong> {submittedReview}</p>}
    </div>
  );
};

export default MovieCard;
