import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokemons = pokedex.map(pokemon =>
  <li key={pokemon.name}>{pokemon.name}</li>
);

ReactDOM.render(
  <ul>{pokemons}</ul>,
  document.querySelector('#root')
);
