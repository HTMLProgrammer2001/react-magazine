"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var mapStateToProps = function (state) { return ({
    cartPrice: state.cart.reduce(function (prev, item) { return (prev + item.count * item.product.price); }, 0).toFixed(2)
}); };
var connected = react_redux_1.connect(mapStateToProps);
var Checkout = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "check my-pad" },
        React.createElement("div", { className: "check__box" },
            React.createElement("b", { className: "check__head mb-10" }, "Cart Total"),
            React.createElement("div", { className: "check__subtotal mb-10 row space-between" },
                React.createElement("div", { className: "check__subtotal-head" }, "Subtotal:"),
                React.createElement("div", { className: "check__subtotal-price" },
                    "$",
                    props.cartPrice)),
            React.createElement("div", { className: "check__shipping mb-10 row space-between" },
                React.createElement("div", { className: "check__shipping-head" }, "Shipping:"),
                React.createElement("div", { className: "check__shipping-list" }, "FREE SHIPPING")),
            React.createElement("hr", null),
            React.createElement("div", { className: "check__result mb-10 row space-between" },
                React.createElement("div", { className: "check__result-head" }, "Total"),
                React.createElement("div", { className: "check__result-price" },
                    "$",
                    props.cartPrice))),
        React.createElement(react_router_dom_1.NavLink, { to: "/checkout", className: "check__but my-pad" }, "Checkout")))); };
exports.default = connected(Checkout);

//# sourceMappingURL=Checkout.js.map
