const express = require('express');
const joke = require('./controllers/jokeController');

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', joke.listJokes);

app.listen(3000, () => console.log('Online na porta 3000!'))