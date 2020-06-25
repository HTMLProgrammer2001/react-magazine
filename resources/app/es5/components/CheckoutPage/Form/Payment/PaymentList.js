"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var connected = react_redux_1.connect(function (state) { return ({
    cartItems: state.cart,
    totalPrice: state.cart.reduce(function (prev, item) { return (prev + item.count * item.product.price); }, 0)
}); });
var PaymentList = function (props) { return (React.createElement("div", { className: "payment__order" },
    React.createElement("div", { className: "payment__head" }, "My Order"),
    React.createElement("div", { className: "payment__order-list" },
        React.createElement("div", { className: "payment__order-item" },
            React.createElement("b", null, "Product"),
            React.createElement("b", null, "Total")),
        props.cartItems.map(function (item, index) { return (React.createElement("div", { key: index, className: "payment__order-item" },
            React.createElement("span", null,
                item.product.name,
                " x ",
                item.count),
            React.createElement("span", null,
                "$",
                (item.product.price * item.count).toFixed(2)))); }),
        React.createElement("div", { className: "payment__order-item" },
            React.createElement("span", null, "Shipping"),
            React.createElement("span", null, "FREE SHIPPING")),
        React.createElement("div", { className: "payment__order-item" },
            React.createElement("b", null, "Total"),
            React.createElement("b", null,
                "$",
                props.totalPrice.toFixed(2)))))); };
exports.default = connected(PaymentList);

//# sourceMappingURL=PaymentList.js.map
