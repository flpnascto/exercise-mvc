const express = require('express');
const Categories = require('./controllers/categoriesController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {
  res.redirect('/categories')
});

app.get('/categories', Categories.getAllCategories);


app.listen(3000, () => console.log('Online!'));