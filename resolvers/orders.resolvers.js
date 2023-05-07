const ordersModel = require('../models/orders.model');

module.exports = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    },
  },
};
