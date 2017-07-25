/**
 * Created by lijie on 17/5/8.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Words', {
            id: { type: DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
            en: { type: DataTypes.STRING, allowNull: false, comment:'单词' },
            cn: { type: DataTypes.STRING, allowNull: false, comment:'翻译' }
        },
        {
            timestamps: false,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'words',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
}