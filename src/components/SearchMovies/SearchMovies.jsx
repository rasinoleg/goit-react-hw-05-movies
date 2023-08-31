import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '2d96552602a88b0c01772770d305e99e';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

function SearchMovies({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          api_key: API_KEY,
          query: searchTerm,
        },
      });
      onSearch(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук фільму"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Пошук</button>
    </div>
  );
}

export default SearchMovies;
