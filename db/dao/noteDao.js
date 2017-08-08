/**
 * Created by lijie on 17/8/9.
 */
var Note = require('../sequelizeIniter').Note;

module.exports = {
    //添加笔记
    addNote : function (noteId, sentence, newWordsArr, tagName) {
        return Note.create({
            noteId: noteId,
            sentence: sentence,
            newWordsArr: newWordsArr,
            tag: tagName
        })
    }
}