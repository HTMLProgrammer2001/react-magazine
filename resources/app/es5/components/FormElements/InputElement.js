"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var InputElement = function (props) {
    var required = props.required, type = props.type, placeholder = props.placeholder, className = props.className, _a = props.input, value = _a.value, name = _a.name, onChange = _a.onChange, _b = props.meta, touched = _b.touched, error = _b.error;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "input  " + className },
            React.createElement("input", { className: "input__elem", required: required, type: type, value: value, name: name, onChange: onChange }),
            React.createElement("label", { className: "input__label" },
                React.createElement("span", null, placeholder),
                required && React.createElement("span", { className: "red" }, "*")),
            React.createElement("div", { className: "input__line" })),
        touched && error && React.createElement("small", { className: "red", style: { margin: '5px' } }, error)));
};
exports.default = InputElement;

//# sourceMappingURL=InputElement.js.map
