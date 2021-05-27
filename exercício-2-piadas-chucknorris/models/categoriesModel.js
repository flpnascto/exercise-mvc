const axios = require('axios');

const getAllCategories = async () => axios
  .get('https://api.chucknorris.io/jokes/categories')
  .then(function (response) {
    return response.data;
  });

module.exports = {
  getAllCategories,
}