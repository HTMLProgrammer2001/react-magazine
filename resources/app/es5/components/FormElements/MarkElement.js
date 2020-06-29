"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var Mark_1 = require("../Mark");
var connected = react_redux_1.connect();
var MarkElement = function (props) {
    var formName = props.formName, dispatch = props.dispatch, _a = props.input, value = _a.value, name = _a.name;
    var changeValue = function (newValue) {
        console.log(newValue);
        dispatch(redux_form_1.change(formName, name, newValue));
    };
    return (React.createElement(Mark_1.default, { rating: value, fixed: false, onChange: changeValue }));
};
exports.default = connected(MarkElement);

//# sourceMappingURL=MarkElement.js.map
