const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Welcome to the default Route');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Welcome to the about route');
  } else if (req.url === '/contact' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('welcome to the contact route');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
