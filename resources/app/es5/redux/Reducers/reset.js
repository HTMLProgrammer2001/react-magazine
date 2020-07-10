"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
var initialState = {
    error: null,
    message: '',
    isLoading: false
};
var registerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.RESET_START:
            return { isLoading: true, message: '', error: null };
        case actionTypes_1.RESET_SUCCESS:
            return { isLoading: false, message: action.payload, error: null };
        case actionTypes_1.RESET_ERROR:
            return { isLoading: false, message: '', error: action.error };
    }
    return state;
};
exports.default = registerReducer;

//# sourceMappingURL=reset.js.map
