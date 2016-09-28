var _ = require("lodash");

var sortItems = function(itemsSold) {
  return _.sortBy(itemsSold, 'quantity').reverse();
};

module.exports = sortItems;
