"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var classnames_1 = require("classnames");
var react_redux_1 = require("react-redux");
var connected = react_redux_1.connect();
var ColorElement = function (props) {
    var className = props.className, dispatch = props.dispatch, color = props.color, checked = props.checked, name = props.input.name;
    var classes = classnames_1.default("goods__color-item " + (className ? className : ''), {
        'goods__color-item_active': checked
    });
    return (React.createElement("div", { className: classes, style: { background: color }, onClick: function () {
            dispatch(redux_form_1.change('productFilter', name, color));
        } }));
};
exports.default = connected(ColorElement);

//# sourceMappingURL=ColorElement.js.map
