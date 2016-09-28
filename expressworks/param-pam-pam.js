'use strict';

const express = require('express');
const app = express();

app.put('/message/:id', (req, res) => {
  let id = req.params.id;
  let str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
  res.send(str);
});

app.listen(process.argv[2] || 3000);
