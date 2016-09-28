'use strict';
var _ = require('lodash');

const worker = (allComments) => {
  let comments = _.groupBy(allComments, 'username');
  let count = [];
  _.forEach(comments, (comment, name) => {
    count.push({
      username: name,
      comment_count: _.size(comment)
    });
  });

  return _.sortBy(count, "comment_count").reverse();
};

module.exports = worker;
