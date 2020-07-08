"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
exports.loginStart = function () { return ({
    type: actionTypes_1.LOGIN_START
}); };
exports.loginSuccess = function () { return ({
    type: actionTypes_1.LOGIN_SUCCESS
}); };
exports.loginError = function (error) { return ({
    type: actionTypes_1.LOGIN_ERROR,
    error: error
}); };

//# sourceMappingURL=loginActions.js.map
