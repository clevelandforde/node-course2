const express = require('express');
const { appendFile } = require('fs');
const { STATUS_CODES } = require('http');
const morgan = require('morgan');

// express app
const app = express();

app.use(express.static('public'));

morgan('tiny');

// register view engine
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  console.log('new request made');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, nex) => {
  console.log('In the next middleware');
  nex();
});
app.get('/', (req, res) => {
  const users = [
    { firstName: 'Caius', lastName: 'Forde', idNo: 93747498 },
    { firstName: 'Tia', lastName: 'Azore', idNo: 8947573 },
    { firstName: 'Nicholas', lastName: 'Daw', idNo: 1240957 },
  ];
  res.render('index', { title: 'Home', users });
});

app.get('/about', (req, res) => {
  res.status(404).render('about', { title: 'About' });
});

app.get('/users/create', (req, res) => {
  res.render('create', { title: 'Create new user' });
});

// 404 page
app.use((req, res) => {
  res.render('404', { title: '404' });
});

// listen for requests
app.listen(3000, () => {
  console.log('listening on port 3000 express');
});
