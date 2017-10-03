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
    //思维节点数据
    var mindNodeData = req.body.mindNode;
    mindNodeData.forEach(function (item, index) {
        if(item.isAdd){
            //添加节点
            mindNodeDao.addNode(item.mindNodeId,
                item.noteContent,
                item.noteType,
                item.childNodeNum,
                item.parentNodeId,
                item.tag,
                item.syncTaskId);
        }
        else {
            //更新节点
            mindNodeDao.updateNode(
                item.mindNodeId,
                item.noteContent,
                item.noteType,
                item.childNodeNum,
                item.parentNodeId,
                item.tag,
                item.syncTaskId)
        }
    })
});

/**
 * 更新
 */
router.post('/pull', function(req, res, next) {

});

module.exports = router;