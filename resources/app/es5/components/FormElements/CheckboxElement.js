"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CheckboxElement = function (props) {
    var placeholder = props.placeholder, className = props.className, style = props.style, _a = props.input, value = _a.value, name = _a.name, onChange = _a.onChange;
    return (React.createElement("div", { className: "checkbox", style: style },
        React.createElement("input", { className: "checkbox__elem  " + className, type: "checkbox", checked: value, name: name, onChange: onChange }),
        React.createElement("label", { className: "checkbox__label" },
            React.createElement("span", null, placeholder))));
};
exports.default = CheckboxElement;

//# sourceMappingURL=CheckboxElement.js.map
