import React, { useState, useEffect } from 'react';
import SearchMovies from '../SearchMovies/SearchMovies'
import axios from 'axios';


const API_KEY = '2d96552602a88b0c01772770d305e99e';
const API_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

export const FilmsList = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        fetchFilmsList();
    }, []);
  
    const fetchFilmsList = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };
  
    return (
      <div>
        <h2>Trending today</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
        <SearchMovies/>
      </div>
    );
};

export default FilmsList;
