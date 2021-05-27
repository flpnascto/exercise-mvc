const Joke = require('../models/jokeModel');

const getJoke = async (_req, res) => {
  const joke = await Joke.getJoke();
  res.render('jokes/index', { joke });
};

const getJokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await Joke.getJokeByCategory(category);
  res.render('jokes/index', { joke })
}

module.exports = {
  getJoke,
  getJokeByCategory,
}