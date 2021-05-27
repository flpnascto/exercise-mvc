const Categories = require('../models/categoriesModel');

const getAllCategories = async (_req, res) => {
  const categories = await Categories.getAllCategories();
  res.render('categories/index', { categories });
};

module.exports = {
  getAllCategories,
}