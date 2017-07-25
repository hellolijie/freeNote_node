/**
 * Created by lijie on 17/5/8.
 */
module.exports = {
    suc: function (res, result) {
        res.json({
            code: 1,
            msg: '操作成功',
            result: result
        });
    },

    fail: function (res, errorMsg) {
        res.json({
            code: -1,
            msg: errorMsg
        });
    }
}