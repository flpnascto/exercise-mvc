const axios = require('axios');

const URL = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = async () => axios
  .get(URL)
  .then(function (response) {
    return response.data;
  });

module.exports = {
  getJokes,
};