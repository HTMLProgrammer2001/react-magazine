"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var CartList_1 = require("./CartList");
var CartDropdown = function () { return (React.createElement("div", { className: "dropdown__body" },
    React.createElement("div", { className: "dropdown__content" },
        React.createElement(CartList_1.default, null),
        React.createElement("div", { className: "row space-between w-100" },
            React.createElement(react_router_dom_1.Link, { to: "/cart" },
                React.createElement("button", { type: "button", className: "check__but sm" }, "View Cart")),
            React.createElement(react_router_dom_1.Link, { to: "/checkout" },
                React.createElement("button", { type: "button", className: "check__but sm" }, "Checkout")))))); };
exports.default = CartDropdown;

//# sourceMappingURL=CartDropdown.js.map
