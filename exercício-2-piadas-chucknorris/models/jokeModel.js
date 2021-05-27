const axios = require('axios');

const getJoke = () => axios
  .get('https://api.chucknorris.io/jokes/random')
  .then(function (response) {
    return response.data;
  });

const getJokeByCategory = (category) => axios
  .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  .then(function (response) {
    return response.data;
  });

module.exports = {
  getJoke,
  getJokeByCategory,
}