'use strict';

var p = Promise.resolve('SECRET');

var p = Promise.reject(new Error('ERROR'));
p.catch((err) => console.error(err.mesage));
