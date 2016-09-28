var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
  var filename = process.argv[3];
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500);
    try {
      books = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(books);
  });
});

app.listen(process.argv[2] || 3000);

// why didn't es6 work?

// 'use strict';
//
// const express = require('express');
// const app = express();
// const fs = require('fs');
//
// app.get('/books', (req, res) => {
//   let filename = process.argv[3];
//   fs.readFile(filename, (e, data) => {
//     if (e) { return res.sendStatus(500); }
//     try {
//       books = JSON.parse(data);
//     } catch (e) {
//       res.sendStatus(500);
//     }
//     res.json(books);
//   });
// });
//
// app.listen(process.argv[2] || 3000);
