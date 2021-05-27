const { getJokes } = require('../models/joke');

const listJokes = async (_req, res) => {
  const { joke } = await getJokes();
  console.log('joke controler --->', joke)
  res.render('jokeView', { joke });
}

module.exports = {
  listJokes,
}