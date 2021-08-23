const {createProxyMiddleware}  = require("http-proxy-middleware");
module.exports = app => {
   app.use('/articles', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
   app.use('/selectArticles', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
   app.use('/comments', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
   app.use('/notes', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
   app.use('/selectNotes', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
}
