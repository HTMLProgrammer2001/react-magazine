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
        case actionTypes_1.REGISTER_START:
            return { error: null, isLoading: true, message: '' };
        case actionTypes_1.REGISTER_SUCCESSFULL:
            return { isLoading: false, error: null, message: action.payload };
        case actionTypes_1.REGISTER_ERROR:
            return { error: action.error, isLoading: false, message: '' };
    }
    return state;
};
exports.default = registerReducer;

//# sourceMappingURL=register.js.map
