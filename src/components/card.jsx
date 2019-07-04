import React from 'react';
import PropTypes from 'prop-types';
import './card.styles.css'

const Card = (props) => {
  const name = props.name; 
  return (
    <figure className="card">
      <picture>
        <img className="art"
          src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          alt="Nothing to Show"
        />
      </picture>
      <figcaption className="label">{name.toUpperCase()}</figcaption>
    </figure>
  );
};

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
