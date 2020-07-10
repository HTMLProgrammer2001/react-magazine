"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
exports.resetStart = function () { return ({
    type: actionTypes_1.RESET_START
}); };
exports.resetSuccess = function (message) { return ({
    type: actionTypes_1.RESET_SUCCESS,
    payload: message
}); };
exports.resetError = function (error) { return ({
    type: actionTypes_1.RESET_ERROR,
    error: error
}); };

//# sourceMappingURL=resetActions.js.map
