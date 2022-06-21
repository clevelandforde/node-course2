const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  User.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Users', users: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create new user' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  //   console.log('MyId', id);

  User.findById(id)
    .then((result) => {
      res.render('details', { title: 'User details', user: result });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
