/**
 * Created by lijie on 17/7/26.
 */
var express = require('express');
var router = express.Router();

var noteDao = require('../db/dao/noteDao.js');
var responseUtil = require('./responseUtil.js');

router.get('/add', function(req, res, next) {
    var noteId = 'hellowordId';
    var sentence = 'hello world';
    var newWordsArr = "['hello']";
    var tagName = '默认';

    noteDao.addNote(noteId, sentence, newWordsArr, tagName)
        .then(function (note) {
            responseUtil.suc(res, note);
        }, next);
});

router.post('/add', function(req, res, next) {
    var noteId = req.body.noteId;
    var sentence = req.body.sentence;
    var newWordsArr = req.body.newWordsArr;
    var tagName = req.body.tagName;

    noteDao.addNote(noteId, sentence, newWordsArr, tagName)
        .then(function (note) {
            responseUtil.suc(res, note);
        }, next);
});

module.exports = router;