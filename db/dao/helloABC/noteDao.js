/**
 * Created by lijie on 17/8/9.
 */
var Note = require('../../sequelizeIniter').Note;

module.exports = {
    /**
     * 添加笔记
     * @param noteId        笔记ID
     * @param sentence      笔记内容
     * @param newWordsArr   笔记生词数组
     * @param tagName       笔记标签
     */
    addNote : function (noteId, sentence, newWordsArr, tagName) {
        return Note.create({
            noteId: noteId,
            sentence: sentence,
            newWordsArr: newWordsArr,
            tag: tagName
        })
    },

    /**
     * 获取笔记
     * @param limit     每页数量
     * @param page      页码
     * @returns {*}
     */
    getNotes: function (limit, page) {
        return Note.findAll({
            offset: limit * (page - 1),
            limit: limit
        });
    }
}