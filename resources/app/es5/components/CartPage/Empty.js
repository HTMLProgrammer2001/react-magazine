"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var EmptyCart = function () { return (React.createElement("div", { className: "empty my-pad" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "empty__text" }, "Your cart is current empty"),
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement("button", { type: "button", className: "empty__back" }, "Return to shop"))))); };
exports.default = EmptyCart;

//# sourceMappingURL=Empty.js.map
