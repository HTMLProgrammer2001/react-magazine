"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var Mark_1 = require("../Mark");
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    changeValue: function (name, newValue) {
        dispatch(redux_form_1.change(ownProps.formName, name, newValue));
    }
}); };
var connected = react_redux_1.connect(null, mapDispatchToProps);
var MarkElement = function (props) {
    var _a = props.input, value = _a.value, name = _a.name;
    return (React.createElement(Mark_1.default, { rating: value, fixed: false, onChange: function (newValue) { return props.changeValue(name, newValue); } }));
};
exports.default = connected(MarkElement);

//# sourceMappingURL=MarkElement.js.map
