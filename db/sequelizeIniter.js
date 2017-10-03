const config = require('./config').mysql;
const Sequelize = require('sequelize');

var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var User = sequelize.import('./model/user.js');
var Words = sequelize.import('./model/helloABC/words.js');
var Note = sequelize.import('./model/helloABC/note.js');
var Tag = sequelize.import('./model/tag.js');

var MindNode = sequelize.import('./model/freeMind/mindNode.js');

sequelize.sync({force : false})
    .then(function () {
        console.log('sync-suc');})
    .catch(function (error) {
        console.log(error);
    });

module.exports = {
    User : User,
    Words : Words,
    Note: Note,
    Tag: Tag,
    MindNode: MindNode,
    sequelize: sequelize
}