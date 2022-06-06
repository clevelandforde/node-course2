const express = require('express');
const { appendFile } = require('fs');
const { STATUS_CODES } = require('http');

// express app
const App = express();

// register view engine
App.set('view engine', 'ejs');

App.get('/', (req, res) => {
  const users = [
    { firstName: 'Caius', lastName: 'Forde', idNo: 93747498 },
    { firstName: 'Tia', lastName: 'Azore', idNo: 8947573 },
    { firstName: 'Nicholas', lastName: 'Daw', idNo: 1240957 },
  ];
  res.render('index', { title: 'Home', users });
});

App.get('/about', (req, res) => {
  res.status(404).render('about', { title: 'About' });
});

App.get('/users/create', (req, res) => {
  res.render('create', { title: 'Create new user' });
});

// // redirect
// App.get('/about-us', (req, res) => {
//   //   res.redirect('/about', '/views/about.html', { root: __dirname });
//   res.redirect('/about');
// });

// 404 page
App.use((req, res) => {
  res.render('404', { title: '404' });
});

// listen for requests
App.listen(3000, () => {
  console.log('listening on port 3000 express');
});
