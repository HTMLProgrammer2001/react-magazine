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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var CartItem_1 = require("./CartItem");
var cartActions_1 = require("../../../redux/Actions/cartActions");
var mapStateToProps = function (state) { return ({
    cartItems: state.cart
}); };
var mapDispatchToProps = function (dispatch) { return ({
    removeItem: function (index) {
        dispatch(cartActions_1.cartRemove(index));
    },
    clearCart: function () {
        dispatch(cartActions_1.cartReset());
    }
}); };
var connected = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var CartTable = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "table__wrap my-pad" },
        React.createElement("div", { className: "table" },
            React.createElement("div", { className: "table__head" },
                React.createElement("div", { className: "table__head-item table__head-item_lg" }, "Product"),
                React.createElement("div", { className: "table__head-item" }, "Price"),
                React.createElement("div", { className: "table__head-item" }, "Quantity"),
                React.createElement("div", { className: "table__head-item" }, "Total"),
                React.createElement("div", { className: "table__head-item" })),
            React.createElement("div", { className: "table__content" }, props.cartItems.map(function (item, index) { return (React.createElement(CartItem_1.default, __assign({ key: index, removeItem: function () { return props.removeItem(index); } }, item))); })))),
    React.createElement("div", { className: "orders__actions" },
        React.createElement("div", { className: "orders__clear", onClick: props.clearCart }, "Clear cart"),
        React.createElement("div", { className: "orders__update" }, "Update cart")))); };
exports.default = connected(CartTable);

//# sourceMappingURL=CartTable.js.map
