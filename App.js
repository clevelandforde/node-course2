const express = require('express');
const { appendFile } = require('fs');
const { STATUS_CODES } = require('http');
const App = express();

App.get('/', (req, res) => {
  //   res.send('Hello Express');

  res.sendFile('./views/index.html', { root: __dirname });
});

App.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

App.get('/about-us', (req, res) => {
  //   res.redirect('/about', '/views/about.html', { root: __dirname });
  res.redirect('/about');
});

App.use((req, res) => {
  res.status(404).sendFile('/views/404.html', { root: __dirname });
});

App.listen(3000, () => {
  console.log('listening on port 3000 express');
});
