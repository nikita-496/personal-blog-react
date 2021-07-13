const proxy = require("http-proxy-middleware");

module.exports = app => {
   app.use(proxy("/articles", { target: "http://localhost:5000/" }));
};