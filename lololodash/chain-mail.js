'use strict';
var _ = require('lodash');

const worker = (wordList) => {
  return _.chain(wordList)
          .map((word) => {
            return word + 'chained';
          })
          .map((word) => {
            return word.toUpperCase();
          })
          .sortBy()
          .value();
};

module.exports = worker;
