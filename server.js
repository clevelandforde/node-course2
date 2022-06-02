const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 50);
  // console.log(num);

  // _.foreach example
  _.forEach({ a: 1, b: 2, c: 3 }, function (value, key) {
    console.log(key);
  });

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); // so as to not keep the request hanging
    } else {
      // res.write(data); // since it's only one thing we're sending here we don't need this line and cam put data directly into res.send()
      res.end(data);
    }
  });
});

server.listen('3000', () => {
  console.log('Listening on port 3000');
});
