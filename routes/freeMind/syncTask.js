/**
 * Created by lijie on 2017/10/2.
 */

var express = require('express');
var router = express.Router();

var sequelize = require('../../sequelizeIniter').sequelize;
var mindNodeDao = require('../../db/dao/freeMind/mindNodeDao.js');

var responseUtil = require('../responseUtil.js');

/**
 * 提交
 */
router.post('/push', function(req, res, next) {
    //思维节点数据
    var mindNodeData = req.body.mindNode;

    sequelize.transaction(function (t) {
        var operationArr = [];
        mindNodeData.forEach(function (item) {
            if (item.isAdd){
                //添加节点
                operationArr.push(
                    mindNodeDao.addNode(item.mindNodeId,
                        item.noteContent,
                        item.noteType,
                        item.childNodeNum,
                        item.parentNodeId,
                        item.tag,
                        item.syncTaskId,
                        t));
            }
            else {
                //更新节点
                operationArr.push(
                    mindNodeDao.updateNode(
                        item.mindNodeId,
                        item.noteContent,
                        item.noteType,
                        item.childNodeNum,
                        item.parentNodeId,
                        item.tag,
                        item.syncTaskId,
                        t));
            }
        });

        return Promise.all(operationArr);
    }).then(function (result) {
        responseUtil.suc(res, result);
    }, next)

    // mindNodeData.forEach(function (item, index) {
    //     if(item.isAdd){
    //         //添加节点
    //         mindNodeDao.addNode(item.mindNodeId,
    //             item.noteContent,
    //             item.noteType,
    //             item.childNodeNum,
    //             item.parentNodeId,
    //             item.tag,
    //             item.syncTaskId);
    //     }
    //     else {
    //         //更新节点
    //         mindNodeDao.updateNode(
    //             item.mindNodeId,
    //             item.noteContent,
    //             item.noteType,
    //             item.childNodeNum,
    //             item.parentNodeId,
    //             item.tag,
    //             item.syncTaskId)
    //     }
    // })
});

/**
 * 更新
 */
router.post('/pull', function(req, res, next) {
    var startSyncTaskId = req.body.startSyncTaskId;
    var endSyncTaskId = req.body.endSyncTaskId;

    mindNodeDao
        .getExpectSyncNode(startSyncTaskId, endSyncTaskId)
        .then(function (result) {
            responseUtil.suc(res, result);
        }, next);
});

module.exports = router;