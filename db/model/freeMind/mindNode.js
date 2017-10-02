/**
 * Created by lijie on 2017/10/2.
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('MindNode', {
            id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
            mindNodeId:{ type: DataTypes.STRING,  allowNull: false, unique : true, comment:'平台无关id'},
            noteContent: { type: DataTypes.STRING,  allowNull: false, comment:'节点内容' },
            noteType: { type: DataTypes.INTEGER, allowNull: false, comment:'节点类型' },
            childNodeNum: { type: DataTypes.INTEGER, allowNull: false,  comment:'子节点个数' },
            parentNodeId: {type: DataTypes.STRING, allowNull: false, comment:'父节点ID'},
            tag: {type: DataTypes.STRING, allowNull: true, comment:'标签'},
            syncTaskId: {type: DataTypes.STRING, allowNull: true, comment:'同步操作任务ID'}

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
