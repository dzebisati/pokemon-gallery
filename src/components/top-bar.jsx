import React from 'react';
import PropTypes from 'prop-types';
import './top-bar.style.css';
import SearchInput from './search-input';
import Button from './button';

const TopBar = ({ sortListFunc, buttonText, searchFunc }) => {
  return (
    <div className="top-bar">
      <SearchInput handleChange={searchFunc} />
      <Button handleClick={sortListFunc} innerText={buttonText} />
    </div>
  );
};

TopBar.propTypes = {
  sortListFunc: PropTypes.func,
  buttonText: PropTypes.oneOf(['SORT ↓', 'SORT ↑']),
  searchFunc: PropTypes.func
};

export default TopBar;
