"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
exports.categoryLoadStart = function () { return ({
    type: actionTypes_1.CATEGORY_LOAD_START
}); };
exports.categoryLoadSuccess = function (payload) { return ({
    type: actionTypes_1.CATEGORY_LOAD_SUCCESS,
    payload: payload
}); };
exports.categoryLoadFailure = function (error) { return ({
    type: actionTypes_1.CATEGORY_LOAD_ERROR,
    error: error
}); };

//# sourceMappingURL=categoryActions.js.map
