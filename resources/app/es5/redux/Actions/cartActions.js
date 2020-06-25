"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
exports.cartAdd = function (product) { return ({
    type: actionTypes_1.CART_ADD,
    payload: product
}); };
exports.cartRemove = function (id) { return ({
    type: actionTypes_1.CART_REMOVE,
    payload: id
}); };
exports.cartReset = function () { return ({
    type: actionTypes_1.CART_RESET
}); };

//# sourceMappingURL=cartActions.js.map
