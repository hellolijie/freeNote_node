/**
 * Created by lijie on 17/8/10.
 */
var Tag = require('../sequelizeIniter').Tag;

module.exports = {
    //添加笔记
    addTag : function (tagId, tagName) {
        return Tag.create({
            tagId: tagId,
            tagName: tagName,
        })
    }
}