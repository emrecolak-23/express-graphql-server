const orders = [
  {
    date: '2023-05-05',
    subtotal: 84.24,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Red Shoe',
          price: 42.12,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
