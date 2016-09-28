'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()});
});
app.listen(process.argv[2]);
