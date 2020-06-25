"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var InputElement = function (props) {
    var required = props.required, type = props.type, placeholder = props.placeholder, className = props.className, _a = props.input, value = _a.value, name = _a.name, onChange = _a.onChange;
    return (React.createElement("div", { className: "input  " + className },
        React.createElement("input", { className: "input__elem", required: required, type: type, value: value, name: name, onChange: onChange }),
        React.createElement("label", { className: "input__label" },
            React.createElement("span", null, placeholder),
            required && React.createElement("span", { className: "red" }, "*")),
        React.createElement("div", { className: "input__line" })));
};
exports.default = InputElement;

//# sourceMappingURL=InputElement.js.map
