"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SelectElement = function (props) {
    var className = props.className, options = props.options, _a = props.input, value = _a.value, name = _a.name, onChange = _a.onChange;
    return (React.createElement("div", { className: "select cur" },
        React.createElement("select", { className: "select__input cur " + className, name: name, value: value, onChange: onChange }, options.map(function (option, index) { return (React.createElement("option", { key: index, value: option }, option)); })),
        React.createElement("i", { className: "fas fa-chevron-down select__icon" }),
        React.createElement("div", { className: "select__line" })));
};
exports.default = SelectElement;

//# sourceMappingURL=SelectElement.js.map
