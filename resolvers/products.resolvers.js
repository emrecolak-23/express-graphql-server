const productsModel = require('../models/products.model');

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
  },
};
