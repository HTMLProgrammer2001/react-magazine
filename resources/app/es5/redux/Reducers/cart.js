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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
var initialState = [];
var cartReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.CART_ADD:
            var cartItem_1 = state.find(function (item) { return (item.product.id == action.payload.product.id
                && item.color == action.payload.color
                && item.size == action.payload.size); });
            if (cartItem_1) {
                return state.map(function (item) { return (item == cartItem_1 ? __assign(__assign({}, item), { count: item.count + action.payload.count, product: action.payload.product }) : item); });
            }
            else {
                return __spreadArrays(state, [action.payload]);
            }
        case actionTypes_1.CART_REMOVE:
            return __spreadArrays(state.slice(0, action.payload), state.slice(action.payload + 1));
        case actionTypes_1.CART_RESET:
            return [];
    }
    return state;
};
exports.default = cartReducer;

//# sourceMappingURL=cart.js.map
