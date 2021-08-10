const {createProxyMiddleware}  = require("http-proxy-middleware");
module.exports = app => {
   app.use('/articles', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
   app.use('/posts', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
   app.use('/notes', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
}
