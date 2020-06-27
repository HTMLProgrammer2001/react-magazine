"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var classnames_1 = require("classnames");
var react_redux_1 = require("react-redux");
var connected = react_redux_1.connect();
var SizeElement = function (props) {
    var className = props.className, dispatch = props.dispatch, size = props.size, checked = props.checked, name = props.input.name;
    var classes = classnames_1.default("goods__size-item " + (className ? className : ''), {
        'goods__size-item_active': checked
    });
    return (React.createElement("li", { className: classes, onClick: function () {
            var newSize = checked ? '' : size;
            dispatch(redux_form_1.change('productFilter', name, newSize));
        } }, size));
};
exports.default = connected(SizeElement);

//# sourceMappingURL=SizeElement.js.map
