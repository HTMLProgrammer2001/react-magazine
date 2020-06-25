import { CART_RESET, CART_ADD, CART_REMOVE } from '../actionTypes';
export var cartAdd = function (product) { return ({
    type: CART_ADD,
    payload: product
}); };
export var cartRemove = function (id) { return ({
    type: CART_REMOVE,
    payload: id
}); };
export var cartReset = function () { return ({
    type: CART_RESET
}); };
//# sourceMappingURL=cartActions.js.map