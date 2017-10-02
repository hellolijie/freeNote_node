/**
 * Created by lijie on 2017/10/2.
 */

var express = require('express');
var router = express.Router();

var mindNodeDao = require('../../db/dao/helloABC/mindNodeDao.js');
var responseUtil = require('../responseUtil.js');

/**
 * 提交
 */
router.post('/push', function(req, res, next) {

});

/**
 * 更新
 */
router.post('/pull', function(req, res, next) {

});

module.exports = router;