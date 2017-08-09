/**
 * Created by lijie on 17/8/10.
 */
var express = require('express');
var router = express.Router();

var tagDao = require('../db/dao/tagDao.js');
var responseUtil = require('./responseUtil.js');

router.get('/add', function(req, res, next) {
    var tagId = 'helloTagId';
    var tagName = 'hello';

    tagDao.addTag(tagId, tagName)
        .then(function (tag) {
            responseUtil.suc(res, tag);
        }, next);
});

router.post('/add', function(req, res, next) {
    var tagId = req.body.tagId;
    var tagName = req.body.tagName;

    tagDao.addTag(tagId, tagName)
        .then(function (note) {
            responseUtil.suc(res, note);
        }, next);
});

module.exports = router;