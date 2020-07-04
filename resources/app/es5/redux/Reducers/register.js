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
    error: null,
    isLoading: false
};
var registerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.REGISTER_START:
            return __assign(__assign({}, state), { error: null, isLoading: true });
        case actionTypes_1.REGISTER_SUCCESSFULL:
            return __assign(__assign({}, state), { isLoading: false, error: null });
        case actionTypes_1.REGISTER_ERROR:
            return __assign(__assign({}, state), { error: action.error, isLoading: false });
    }
    return state;
};
exports.default = registerReducer;

//# sourceMappingURL=register.js.map
