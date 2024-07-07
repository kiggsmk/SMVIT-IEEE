const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { STATUS_CODES } = require('http');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/regmem', (req, res) => {
    const { name, email } = req.body;
    console.log(name);
    console.log(email);
    res.send(STATUS_CODES)
    
  });

  app.listen(3001)