"use strict";
exports.__esModule = true;
exports.getAllForwardSeq = void 0;
function getAllForwardSeq(msg) {
    var _ret = [];
    for (var i = 1; i <= msg.length; i++) {
        _ret.push(msg.substring(0, i));
    }
    return _ret;
}
exports.getAllForwardSeq = getAllForwardSeq;
