/**
 * Created by lijie on 17/7/26.
 */
var express = require('express');
var router = express.Router();

var noteDao = require('../db/dao/noteDao.js');
var responseUtil = require('./responseUtil.js');

