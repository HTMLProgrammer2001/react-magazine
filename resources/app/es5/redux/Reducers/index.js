"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_form_1 = require("redux-form");
var cart_1 = require("./cart");
var category_1 = require("./category");
var register_1 = require("./register");
var verify_1 = require("./verify");
var login_1 = require("./login");
var user_1 = require("./user");
var storeReducer = redux_1.combineReducers({
    cart: cart_1.default,
    category: category_1.default,
    register: register_1.default,
    verify: verify_1.default,
    login: login_1.default,
    user: user_1.default,
    form: redux_form_1.reducer
});
exports.default = storeReducer;

//# sourceMappingURL=index.js.map
