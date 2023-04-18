
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

app.get('/suca', (req, res) => {
    res.send('Suca');
  });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});