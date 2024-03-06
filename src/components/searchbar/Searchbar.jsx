import React, { useState } from 'react';
import PropTypes from 'prop-types';  

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <header className='searchbar'>
      <form className='searchForm' onSubmit={handleSubmit}>
        <button type="submit" className='searchForm-button'>
          <span className='searchForm-button-label'>Search</span>
        </button>
        <input
          className='searchForm-input'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar; 