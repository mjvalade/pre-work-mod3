'use strict';
const _ = require('lodash');

const worker = (incomes) => {
  let average,
      underperform,
      overperform;

      incomes = _.sortBy(incomes, 'income');

      average = _.reduce(incomes, (sum, num) => {
        return sum + num.income;
      }, 0) / incomes.length;

      underperform = _.filter(incomes, (num) => {
        return num.income <= average;
      });

      overperform = _.filter(incomes, (num) => {
        return num.income > average;
      });

      return {
        average: average,
        underperform: underperform,
        overperform: overperform
      };
};

module.exports = worker;
