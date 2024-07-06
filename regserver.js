const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('http://localhost:3001/membership', (req, res) => {
    const { name, email } = req.body;
    console.log(req.body)
    
  });

  app.listen(PORT)