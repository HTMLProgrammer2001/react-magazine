"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var classnames_1 = require("classnames");
var react_redux_1 = require("react-redux");
var connected = react_redux_1.connect();
var SizeElement = function (props) {
    var _a;
    var className = props.className, formName = props.formName, dispatch = props.dispatch, viewType = props.viewType, size = props.size, checked = props.checked, name = props.input.name;
    var mainClass = viewType == 'product' ? 'product__size' : 'goods__size';
    var classes = classnames_1.default(mainClass + "-item " + (className ? className : ''), (_a = {},
        _a[mainClass + "-item_active"] = checked,
        _a));
    return (React.createElement("li", { className: classes, onClick: function () {
            var newSize = checked ? '' : size;
            dispatch(redux_form_1.change(formName, name, newSize));
        } }, size));
};
exports.default = connected(SizeElement);

//# sourceMappingURL=SizeElement.js.map
