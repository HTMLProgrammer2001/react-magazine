"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    isLoading: false,
    error: null,
    categories: [{
            name: 'Test',
            productCount: 32,
            slug: 'test'
        }]
};
var categoryReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    return state;
};
exports.default = categoryReducer;

//# sourceMappingURL=category.js.map
