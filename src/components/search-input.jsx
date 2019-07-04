import React from 'react';
import './search-input.style.css';
import PropTypes from 'prop-types';

const SearchInput = ({ handleChange }) => {
  return <input className="search-box" type="text" placeholder="Type to search..." onChange={handleChange} />;
};

SearchInput.propTypes = {
  handleChange: PropTypes.func
};

export default SearchInput;
