const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
require('dotenv').config();

// express app
const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then((conn) => {
    app.listen(3000, console.log('Connected to database'));
  })
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
morgan('dev');

// basic routes
app.get('/', (req, res) => {
  res.redirect('/users');
});

app.get('/about', (req, res) => {
  res.status(404).render('about', { title: 'About' });
});

// user routes
app.get('/users', (req, res) => {
  User.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Users', users: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.redirect('/users');
    })
    .catch((err) => console.log(err));
});

app.get('/users/create', (req, res) => {
  res.render('create', { title: 'Create new user' });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  //   console.log('MyId', id);

  User.findById(id)
    .then((result) => {
      res.render('details', { title: 'User details', user: result });
    })
    .catch((err) => console.log(err));
});

// 404 page
app.use((req, res) => {
  res.render('404', { title: '404' });
});
