"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var connected = react_redux_1.connect();
var NumericElement = function (props) {
    var className = props.className, formName = props.formName, dispatch = props.dispatch, _a = props.input, value = _a.value, name = _a.name;
    var changeValue = function (newValue) {
        if (newValue <= 0) {
            return;
        }
        dispatch(redux_form_1.change(formName, name, newValue));
    };
    return (React.createElement("span", { className: "order__quantity-count " + className },
        React.createElement("span", { className: "order__quantity-control", onClick: function () { return changeValue(value - 1); } }, "-"),
        React.createElement("span", { className: "order__quantity-elem", contentEditable: true }, value),
        React.createElement("span", { className: "order__quantity-control", onClick: function () { return changeValue(value + 1); } }, "+")));
};
exports.default = connected(NumericElement);

//# sourceMappingURL=Numeric.js.map
