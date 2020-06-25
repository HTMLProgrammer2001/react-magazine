"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Questions = function () { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "questions my-pad" },
        React.createElement("div", { className: "question" },
            React.createElement("div", { className: "question__text" },
                "Returning customer ?",
                React.createElement(react_router_dom_1.Link, { to: "/login" }, "Click here to login."))),
        React.createElement("div", { className: "question" },
            React.createElement("div", { className: "question__text" },
                "Have a coupon ?",
                React.createElement("a", { href: "#" }, "Click here to enter.")))))); };
exports.default = Questions;

//# sourceMappingURL=Questions.js.map
