
import React, { useState, useEffect } from 'react';
import searchIcon from './search.svg'; // Ensure this import is correct
import MovieCard from './MovieCard'; // Assuming MovieCard is in the same directory

import './App.css';

const API_URL = 'http://www.omdbapi.com/?apikey=51ed4b1d';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Hulk');
  }, []);

  return (
    <div className="app">
      <h1>Cyrus Movie App</h1>
      <p className='head'>React Developer</p>

      <div className="search">
        <input
          placeholder="Search for movies" required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        {movies?.length > 0
          ? movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
          : <div className="empty"><h2>No movies found</h2></div>}
      </div>
    

          {/* Footer Section */}
          <footer className="footer">
          <p>© 2024 Courtesy of Cyrus Maundu. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://x.com/maundu_cyrus?t=SVtAFMdpVyEzbxP-AUC0AQ&s=08" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/cyrus-maundu-b90ab4257/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Maunducyrus" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </footer>
      </div>
  );
};



export default App;
