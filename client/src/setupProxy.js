const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/register',
    createProxyMiddleware({
      target: 'http://localhost:3000/register',
      changeOrigin: true,
    })
  );
  app.use(
    '/signin',
    createProxyMiddleware({
      target: 'http://localhost:3000/signin',
      changeOrigin: true,
    })
  );
  app.use(
    '/profiles',
    createProxyMiddleware({
      target: 'http://localhost:3000/profiles',
      changeOrigin: true,
    })
  );
  app.use(
    '/getData',
    createProxyMiddleware({
      target: 'http://localhost:3000/getData',
      changeOrigin: true,
    })
  );
  app.use(
    '/contact',
    createProxyMiddleware({
      target: 'http://localhost:3000/contact',
      changeOrigin: true,
    })
  );
  app.use(
    '/logouts',
    createProxyMiddleware({
      target: 'http://localhost:3000/logouts',
      changeOrigin: true,
    })
  );
};