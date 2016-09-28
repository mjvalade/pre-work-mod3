'use strict';

var _ = require('lodash');

let worker = (temps) => {
  let cityList = {
    hot: [],
    warm: []
  };

  let checkTemps = (temps) => {
    return temps > 19;
  };

  _.forEach(temps, (city, cityName) => {
    if (_.every(city, checkTemps)) {
      cityList.hot.push(cityName);
    }
    else if (_.some(city, checkTemps)) {
      cityList.warm.push(cityName);
    }
  });

  return cityList;
};

module.exports = worker;
