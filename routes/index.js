var express = require('express');
var router = express.Router();


/* GET home page. */
const home = require('./home');
const posts = require('./posts');

module.exports = function(app) {
    // app.use(openEndpoints());
    router.use('/', home);
    router.use('/posts', posts);
    return router;
}

