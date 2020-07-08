"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
exports.verifyStart = function () { return ({
    type: actionTypes_1.VERIFY_START
}); };
exports.verifyError = function (error) { return ({
    type: actionTypes_1.VERIFY_ERROR,
    error: error
}); };
exports.verifySuccess = function (message) { return ({
    type: actionTypes_1.VERIFY_SUCCESS,
    payload: message
}); };

//# sourceMappingURL=verifyActions.js.map
