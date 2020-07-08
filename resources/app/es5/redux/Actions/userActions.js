"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
exports.loadUserStart = function () { return ({
    type: actionTypes_1.USER_LOAD_START
}); };
exports.loadUserError = function (error) { return ({
    type: actionTypes_1.USER_LOAD_ERROR,
    error: error
}); };
exports.loadUserSuccessfull = function (userInf) { return ({
    type: actionTypes_1.USER_LOAD_SUCCESSFULL,
    payload: userInf
}); };
exports.resetUser = function () { return ({
    type: actionTypes_1.USER_RESET
}); };

//# sourceMappingURL=userActions.js.map
