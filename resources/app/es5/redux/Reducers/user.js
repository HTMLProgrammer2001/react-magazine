"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
var initialState = {
    isLoading: false,
    error: '',
    token: null,
    user: null
};
var cartReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.USER_LOAD_START:
            return __assign(__assign({}, state), { isLoading: true });
        case actionTypes_1.USER_LOAD_ERROR:
            return __assign(__assign({}, state), { isLoading: false, error: action.error });
        case actionTypes_1.USER_LOAD_SUCCESSFULL:
            return __assign(__assign({}, initialState), { user: action.payload.user, token: action.payload.token });
        case actionTypes_1.USER_RESET:
            return initialState;
    }
    return state;
};
exports.default = cartReducer;

//# sourceMappingURL=user.js.map
