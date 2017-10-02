/**
 * Created by lijie on 17/5/8.
 */
var Words = require('../../sequelizeIniter').Words;

module.exports = {
    translate : function (word) {
        return Words.find({
            where: {
                en: word
            }
        });
    }
}