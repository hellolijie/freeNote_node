/**
 * Created by lijie on 17/8/9.
 */

const crypto = require('crypto');

module.exports = {
    //创建平台无关id
    createPlatformnessId : function (platformName) {
        const hash = crypto.createHash('md5');
        hash.update(platformName + Math.random() + new Date());
        return hash.digest('hex');
    }
}