"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
exports.registerStart = function () { return ({
    type: actionTypes_1.REGISTER_START
}); };
exports.registerSuccess = function (message) { return ({
    type: actionTypes_1.REGISTER_SUCCESSFULL,
    payload: message
}); };
exports.registerError = function (error) { return ({
    type: actionTypes_1.REGISTER_ERROR,
    error: error
}); };

//# sourceMappingURL=registerActions.js.map
