"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var Burger = function (props) {
    var burgerClasses = classnames_1.default('burger header__icon', {
        active: props.isOpen
    });
    return (React.createElement("div", { className: burgerClasses, onClick: function () {
            props.changeOpen(function (prev) { return !prev; });
        } },
        React.createElement("div", { className: "burger__body" },
            React.createElement("span", { className: "burger__item" }),
            React.createElement("span", { className: "burger__item" }),
            React.createElement("span", { className: "burger__item" }))));
};
exports.default = Burger;

//# sourceMappingURL=Burger.js.map
