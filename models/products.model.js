const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jean',
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((products) => {
    return products.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (product) {
    const newReview = {
      rating,
      comment,
    };

    product.reviews.push(newReview);

    return newReview;
  }

  return null;
}

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
