import React from 'react';
import PropTypes from 'prop-types';
import './card-list.styles.css';
import Card from './card';


const CardList = props => {
  const { pokemonList, searchValue } = props;
  const filterdList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="card-list">
      {filterdList.map((v, i) => {
        return <Card name={v.name} key={i} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string
};

export default CardList;
