/**
 * Created by lijie on 17/5/8.
 */
var express = require('express');
var router = express.Router();

var wordsDao = require('../db/dao/wordsDao.js');
var responseUtil = require('./responseUtil.js');

router.get('/', function(req, res, next) {
    wordsDao.translate('hello')
        .then(function (word) {
            responseUtil.suc(res, word);
        }, next);
});

router.post('/', function(req, res, next) {
    var newWord = req.body.newWord;

    wordsDao.translate(newWord)
        .then(function (word) {
            responseUtil.suc(res, word);
        }, next);
});

module.exports = router;