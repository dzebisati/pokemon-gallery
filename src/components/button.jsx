import React from 'react';
import './button.style.css';
import PropTypes from 'prop-types';

const Button = ({ handleClick, innerText }) => {
  return (
    <button className="button" onClick={handleClick}>
      {innerText}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  innerText: PropTypes.string
};

export default Button;
