const http = require('http');
const { createProxyServer } = require('http-proxy');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const proxy = createProxyServer({
  target: 'http://localhost:3000',
  ws: true,
});

proxy.on('error', function(err, req, res) {
  console.error('proxy error', err);
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong with the proxy.');
});

app.prepare().then(() => {
  http.createServer((req, res) => {
    proxy.web(req, res);
  }).listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
});
