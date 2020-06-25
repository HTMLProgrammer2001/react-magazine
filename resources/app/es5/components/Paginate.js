"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Paginate = function (props) { return (React.createElement("div", { className: "paginate" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "paginate__content" },
            React.createElement("div", { className: "paginate__name" }, "SHOP SIDEBAR"),
            React.createElement("div", { className: "paginate__path" }, props.paths.map(function (item) { return (React.createElement(react_router_dom_1.Link, { to: item.path, key: item.path, className: 'paginate__item' }, item.name)); })))))); };
exports.default = Paginate;

//# sourceMappingURL=Paginate.js.map
