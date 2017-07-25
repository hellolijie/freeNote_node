/**
 * Created by lijie on 17/5/7.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Tag', {
            id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
            tagId:{type: DataTypes.STRING,  allowNull: false, unique : true, comment:'标签平台无关id'},
            tagName: { type: DataTypes.STRING,  allowNull: false, comment:'标签名称' }
        },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'tag',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
}