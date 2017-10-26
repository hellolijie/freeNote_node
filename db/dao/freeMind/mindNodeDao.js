/**
 * Created by lijie on 2017/10/2.
 */

var MindNote = require('../../sequelizeIniter').MindNode;

module.exports = {
    /**
     * 添加节点
     * @param mindNodeId        //平台无关节点ID
     * @param noteContent       //节点内容
     * @param noteType          //节点类型
     * @param childNodeNum      //子节点数量
     * @param parentNodeId      //父节点ID
     * @param tag               //标签
     * @param syncTaskId        //更新任务标识ID
     */
    addNode : function (mindNodeId, noteContent, noteType, childNodeNum, parentNodeId, tag, syncTaskId, t) {
        return MindNote.create({
                mindNodeId: mindNodeId,
                noteContent: noteContent,
                noteType: noteType,
                childNodeNum: childNodeNum,
                parentNodeId: parentNodeId,
                tag: tag,
                syncTaskId: syncTaskId
            },
            {
                transaction: t
            })
    },

    /**
     * 更新节点
     * @param mindNodeId
     * @param noteContent
     * @param noteType
     * @param childNodeNum
     * @param parentNodeId
     * @param tag
     * @param syncTaskId
     * @returns {Promise.<Array.<affectedCount, affectedRows>>|*}
     */
    updateNode : function (mindNodeId, noteContent, noteType, childNodeNum, parentNodeId, tag, syncTaskId, t) {
        return MindNote.update({
                noteContent: noteContent,
                noteType: noteType,
                childNodeNum: childNodeNum,
                parentNodeId: parentNodeId,
                tag: tag,
                syncTaskId: syncTaskId
            },
            {
                mindNodeId: mindNodeId
            },
            {
                transaction: t
            })
    },

    /**
     * 获取待同步节点
     * @param startSyncTaskId       更新起始的 操作任务ID
     * @param endSyncTaskId         更新结束的 操作任务ID
     * @returns {*}
     */
    getExpectSyncNode : function (startSyncTaskId, endSyncTaskId) {
        return MindNote.findAndCountAll({
            where : {
                syncTaskId : {gt: startSyncTaskId},
                syncTaskId : {lte: endSyncTaskId}
            }
        })
    }
}