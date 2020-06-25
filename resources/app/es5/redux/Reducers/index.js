"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_form_1 = require("redux-form");
var cart_1 = require("./cart");
var category_1 = require("./category");
var storeReducer = redux_1.combineReducers({
    cart: cart_1.default,
    category: category_1.default,
    form: redux_form_1.reducer
});
exports.default = storeReducer;

//# sourceMappingURL=index.js.map
