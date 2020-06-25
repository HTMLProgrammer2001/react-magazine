"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CartTable_1 = require("./CartTable");
var Checkout_1 = require("./Checkout");
var Content = function (props) { return (React.createElement(React.Fragment, null,
    React.createElement(CartTable_1.default, { cartItems: props.cartItems }),
    React.createElement(Checkout_1.default, { cartItems: props.cartItems }))); };
exports.default = Content;

//# sourceMappingURL=index.js.map
