"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    changeValue: function (name, newValue) {
        if (newValue <= 0) {
            return;
        }
        dispatch(redux_form_1.change(ownProps.formName, name, newValue));
    }
}); };
var connected = react_redux_1.connect(null, mapDispatchToProps);
var NumericElement = function (props) {
    var className = props.className, _a = props.input, value = _a.value, name = _a.name;
    return (React.createElement("span", { className: "order__quantity-count " + className },
        React.createElement("span", { className: "order__quantity-control", onClick: function () { return props.changeValue(name, value - 1); } }, "-"),
        React.createElement("span", { className: "order__quantity-elem" }, value),
        React.createElement("span", { className: "order__quantity-control", onClick: function () { return props.changeValue(name, value + 1); } }, "+")));
};
exports.default = connected(NumericElement);

//# sourceMappingURL=Numeric.js.map
