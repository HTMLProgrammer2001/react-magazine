"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
var initialState = {
    message: null,
    error: null,
    isLoading: false
};
var verifyReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.VERIFY_START:
            return { message: null, error: null, isLoading: true };
        case actionTypes_1.VERIFY_ERROR:
            return { message: null, error: action.error, isLoading: false };
        case actionTypes_1.VERIFY_SUCCESS:
            return { message: action.payload, error: null, isLoading: false };
    }
    return state;
};
exports.default = verifyReducer;

//# sourceMappingURL=verify.js.map
