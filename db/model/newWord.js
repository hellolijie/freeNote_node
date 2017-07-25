/**
 * Created by lijie on 17/5/7.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('NewWord', {
            id: {type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
            newWordId: {type: DataTypes.STRING,  allowNull: false, unique : true, comment:'平台无关id'},
            newWord: {type: DataTypes.STRING,  allowNull: false, comment:'生词' },
            translate: {type: DataTypes.STRING, allowNull: false, comment: '翻译'}
        },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'newWord',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
}
