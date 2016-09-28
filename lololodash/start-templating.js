'use strict';
const _ = require('lodash');

const worker = (data) => {
  let template = 'Hello <%= name %> (logins: <%= login.length %>)';

  return _.template(template)(data);
};

module.exports = worker;
