'use strict';
/* global getPromise1, getPromise2 */

function all(a, b) {
  return new Promise(function(fulfill, reject) {
    let counter = 0;
    let out = [];

    a.then(function(val) {
      out[0] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });

    b.then(function(val) {
      out[1] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
