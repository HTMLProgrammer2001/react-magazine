"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./Header/");
var Footer_1 = require("./Footer");
var Content_1 = require("./Content");
var Newsletter_1 = require("./Newsletter");
var App = function () { return (React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(Header_1.default, null),
    React.createElement(Content_1.default, null),
    React.createElement(Newsletter_1.default, null),
    React.createElement(Footer_1.default, null))); };
exports.default = App;

//# sourceMappingURL=App.js.map
