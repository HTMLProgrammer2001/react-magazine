"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Checkout = function (props) {
    var cartPrice = props.cartItems.reduce(function (prev, item) { return (prev + item.count * item.product.price); }, 0).toFixed(2);
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "check my-pad" },
            React.createElement("div", { className: "check__box" },
                React.createElement("b", { className: "check__head mb-10" }, "Cart Total"),
                React.createElement("div", { className: "check__subtotal mb-10 row space-between" },
                    React.createElement("div", { className: "check__subtotal-head" }, "Subtotal:"),
                    React.createElement("div", { className: "check__subtotal-price" },
                        "$",
                        cartPrice)),
                React.createElement("div", { className: "check__shipping mb-10 row space-between" },
                    React.createElement("div", { className: "check__shipping-head" }, "Shipping:"),
                    React.createElement("div", { className: "check__shipping-list" }, "FREE SHIPPING")),
                React.createElement("hr", null),
                React.createElement("div", { className: "check__result mb-10 row space-between" },
                    React.createElement("div", { className: "check__result-head" }, "Total"),
                    React.createElement("div", { className: "check__result-price" },
                        "$",
                        cartPrice))),
            React.createElement("button", { type: "button", className: "check__but my-pad" }, "Checkout"))));
};
exports.default = Checkout;

//# sourceMappingURL=Checkout.js.map
