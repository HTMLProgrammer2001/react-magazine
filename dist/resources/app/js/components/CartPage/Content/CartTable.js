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
import * as React from 'react';
import CartItem from './CartItem';
var CartTable = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "table__wrap my-pad" },
        React.createElement("div", { className: "table" },
            React.createElement("div", { className: "table__head" },
                React.createElement("div", { className: "table__head-item table__head-item_lg" }, "Product"),
                React.createElement("div", { className: "table__head-item" }, "Price"),
                React.createElement("div", { className: "table__head-item" }, "Quantity"),
                React.createElement("div", { className: "table__head-item" }, "Total"),
                React.createElement("div", { className: "table__head-item" })),
            React.createElement("div", { className: "table__content" }, props.cartItems.map(function (item, index) { return (React.createElement(CartItem, __assign({ key: index }, item))); })))),
    React.createElement("div", { className: "orders__actions" },
        React.createElement("div", { className: "orders__clear" }, "Clear cart"),
        React.createElement("div", { className: "orders__update" }, "Update cart")))); };
export default CartTable;
//# sourceMappingURL=CartTable.js.map