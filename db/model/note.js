/**
 * Created by lijie on 17/5/7.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Note', {
            id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
            noteId:{ type: DataTypes.STRING,  allowNull: false, unique : true, comment:'平台无关id'},
            sentence: { type: DataTypes.STRING,  allowNull: false, comment:'笔记内容' },
            wordsIndexes: { type: DataTypes.STRING, allowNull: false, comment:'生词位置索引' },
            tagId: { type: DataTypes.STRING, allowNull: false,  comment:'笔记标签' },
            playCount: {type: DataTypes.INTEGER, allowNull: true, comment:'播放次数'}
        },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'note',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
}
