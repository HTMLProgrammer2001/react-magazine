"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
var initialState = {
    error: null,
    isLoading: false
};
var loginReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.LOGIN_START:
            return { error: null, isLoading: true };
        case actionTypes_1.LOGIN_SUCCESS:
            return { isLoading: false, error: null };
        case actionTypes_1.LOGIN_ERROR:
            return { error: action.error, isLoading: false };
    }
    return state;
};
exports.default = loginReducer;

//# sourceMappingURL=login.js.map
