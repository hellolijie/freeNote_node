/**
 * Created by lijie on 17/5/1.
 */
var User = require('../sequelizeIniter').User;

module.exports = {
    //添加用户
    add: function (username, password) {
        return User.create({
            username: username, password: password
        });
    }
};
