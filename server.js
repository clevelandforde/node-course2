const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log('Server running');
  // console.log(req.url, req.httpVersion, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Welcome</h1>');
  res.write('<h2>Ninjas</h2>');
  res.end();
});

server.listen('3000', () => {
  console.log('Listening on port 3000');
});
