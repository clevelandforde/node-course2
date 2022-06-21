const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
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
app.use('/users', userRoutes); // scoped to the specific url "users"

// 404 page
app.use((req, res) => {
  res.render('404', { title: '404' });
});
