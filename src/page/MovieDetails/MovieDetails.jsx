import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const API_KEY = '2d96552602a88b0c01772770d305e99e';
const API_URL = 'https://api.themoviedb.org/3/movie';

function MovieDetails() {
  const location = useLocation();
  const movieId = location.pathname.split("/").pop();

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      });
      setMovieDetails(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  if (!movieDetails) {
    return ;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Рік виходу: {movieDetails.release_date}</p>
    </div>
  );
}

export default MovieDetails;
