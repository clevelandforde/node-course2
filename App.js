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
    app.listen(
      3000,
      console.log('Connected to database'),
      console.log('Listening for requests on port 3000 express')
    );
  })
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
morgan('dev');

// // mongoose and mongo sandbox routes
// app.get('/add-user', (req, res) => {
//   const user = new User({
//     lastName: 'Forde',
//     firstName: 'Leon',
//     idNo: 123435,
//     regimentNo: '54321',
//     rank: 'civ',
//   });
//   user
//     .save()
//     .then((bio) => {
//       res.send(bio);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/single-user', (req, res) => {
//   User.findById('62a90f43c92c3ed99dcc3a16')
//     .then((singleRegistrant) => {
//       res.send(singleRegistrant);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/all-users', (req, res) => {
//   User.find()
//     .then((registrants) => {
//       res.send(registrants);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.use((req, res, next) => {
//   console.log('new request made');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// app.use((req, res, nex) => {
//   console.log('In the next middleware');
//   nex();
// });

// basic routes
app.get('/', (req, res) => {
  res.redirect('/users');
  //   const users = [
  //     { firstName: 'Caius', lastName: 'Forde', idNo: 93747498 },
  //     { firstName: 'Tia', lastName: 'Azore', idNo: 8947573 },
  //     { firstName: 'Nicholas', lastName: 'Daw', idNo: 1240957 },
  //   ];
  //   res.render('index', { title: 'Home', users });
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

app.get('/users/create', (req, res) => {
  res.render('create', { title: 'Create new user' });
});

// 404 page
app.use((req, res) => {
  res.render('404', { title: '404' });
});

// // listen for requests
// app.listen(3000, () => {
//   console.log('listening on port 3000 express');
// });
