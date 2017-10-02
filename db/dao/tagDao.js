/**
 * Created by lijie on 17/8/10.
 */
var Tag = require('../sequelizeIniter').Tag;

module.exports = {
    /**
     * 添加笔记
     * @param tagId    标签id
     * @param tagName  标签名称
     */
    addTag : function (tagId, tagName) {
        return Tag.create({
            tagId: tagId,
            tagName: tagName,
        })
    },

    /**
     * 获取标签
     * @param limit  每页条数
     * @param page   页数 从1开始
     * @returns {*}
     */
    getTags : function (limit, page) {
        return Tag.findAll({
            offset: limit * (page - 1),
            limit: limit
        })
    }
}