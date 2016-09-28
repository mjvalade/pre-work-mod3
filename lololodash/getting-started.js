var _ = require('lodash');

var worker = function(userList) {
  return _.filter(userList, {active: true});
};

module.exports = worker;

  // [
  //    { id: 22, username: "martin", active: true},
  //    { id: 23, username: "max",    active: false},
  //    { id: 24, username: "linda",  active: false}
  // ]
