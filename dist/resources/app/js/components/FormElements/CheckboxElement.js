import * as React from 'react';
var CheckboxElement = function (props) {
    var placeholder = props.placeholder, className = props.className, _a = props.input, value = _a.value, name = _a.name, onChange = _a.onChange;
    return (React.createElement("div", { className: "checkbox" },
        React.createElement("input", { className: "checkbox__elem  " + className, type: "checkbox", checked: value, name: name, onChange: onChange }),
        React.createElement("label", { className: "checkbox__label" },
            React.createElement("span", null, placeholder))));
};
export default CheckboxElement;
//# sourceMappingURL=CheckboxElement.js.map