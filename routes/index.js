var express = require('express');
var router = express.Router();

var home = require('./home');
var posts = require('./PostData');

module.exports = function(app) {
    // app.use(openEndpoints());
    router.use('/', home);
    router.use('/posts', posts);
    return router;
}