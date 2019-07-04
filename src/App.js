import React, { Component, Fragment } from 'react';
import './App.css';
import CardList from './components/card-list';
import TopBar from './components/top-bar';
import Button from './components/button';

class App extends Component {
  state = {
    data: {
      pokemonList: [{ name: 'data is loading' }],
      searchValue: '',
      nextList: null,
      imgUrl: '',
      sortFromTo: '↓'
    }
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then(response => {
        return response.json();
      })
      .then(pokemonListJson => {
        this.setState({
          data: {
            ...this.state.data,
            pokemonList: pokemonListJson.results,
            nextList: pokemonListJson.next
          }
        });
      });
  }

  getNewPokemonList = () => {
    fetch(this.state.data.nextList)
      .then(response => {
        return response.json();
      })
      .then(pokemonListJson => {
        this.setState({
          data: {
            ...this.state.data,
            pokemonList: [
              ...this.state.data.pokemonList,
              ...pokemonListJson.results
            ],
            nextList: pokemonListJson.next,
            searchList: null
          }
        });
      });
  };

  sortPokemonList = () => {
    const isDirectionDown = this.state.data.sortFromTo === '↑';
    const sortedList = this.state.data.pokemonList.sort((a, b) => {
      switch (true) {
        case isDirectionDown && a.name > b.name:
          return 1;

        case isDirectionDown && a.name < b.name:
          return -1;

        case !isDirectionDown && a.name < b.name:
          return 1;

        case !isDirectionDown && a.name > b.name:
          return -1;

        default:
          return 0;
      }
    });

    this.setState({
      data: {
        ...this.state.data,
        pokemonList: sortedList,
        sortFromTo: isDirectionDown ? '↓' : '↑'
      }
    });
  };

  searchPokemon = event => {
    const currentValue = event.target.value;

    this.setState({
      data: {
        ...this.state.data,
        searchValue: currentValue
      }
    });
  };

  render() {
    const data = this.state.data;

    return (
      <Fragment>
        <TopBar
          searchFunc={this.searchPokemon}
          sortListFunc={this.sortPokemonList}
          buttonText={`SORT ${this.state.data.sortFromTo}`}
        />
        <CardList
          pokemonList={data.pokemonList}
          searchValue={data.searchValue}
        />
        <Button handleClick={this.getNewPokemonList} innerText="MORE" />
      </Fragment>
    );
  }
}

export default App;
