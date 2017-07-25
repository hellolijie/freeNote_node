var express = require('express');
var router = express.Router();

var userDao = require('../db/dao/userDao.js');
var responseUtil = require('./responseUtil.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 增加用户
router.get('/addUser', function(req, res, next) {
    userDao.add('lijie', 'helloword')
        .then(function(user){
            responseUtil.suc(res, user);
        }, next);
});

module.exports = router;
