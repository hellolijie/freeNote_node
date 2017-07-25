/**
 * Created by lijie on 17/5/7.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('NoteNewWord', {
            id: {type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
            noteNewWordId: {type: DataTypes.STRING,  allowNull: false, unique : true, comment:'平台无关id'},
            noteId: {type: DataTypes.STRING,  allowNull: false, comment:'笔记平台无关id' },
            newWordId: {type: DataTypes.STRING,  allowNull: false, comment:'生词平台无关id'}
        },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'note_new_word',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
}
