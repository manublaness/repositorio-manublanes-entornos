const fetch = require("node-fetch");

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'your-api-key', // Sustituye con tu clave de API
    'X-RapidAPI-Host': 'pokeapi.co'
  }
};

fetch('https://pokeapi.co/api/v2/pokemon/pikachu', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error('Error:', err));
