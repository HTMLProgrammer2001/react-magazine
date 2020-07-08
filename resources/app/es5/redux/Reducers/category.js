"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
var initialState = {
    isLoading: false,
    error: null,
    categories: [{
            name: 'Test',
            productCount: 32,
            slug: 'test',
            image: '/image/noAvatar.png'
        }]
};
var categoryReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.CATEGORY_LOAD_START:
            return { categories: [], isLoading: true, error: null };
        case actionTypes_1.CATEGORY_LOAD_ERROR:
            return { categories: [], isLoading: false, error: action.error };
        case actionTypes_1.CATEGORY_LOAD_SUCCESS:
            return { categories: action.payload, isLoading: false, error: null };
    }
    return state;
};
exports.default = categoryReducer;

//# sourceMappingURL=category.js.map
