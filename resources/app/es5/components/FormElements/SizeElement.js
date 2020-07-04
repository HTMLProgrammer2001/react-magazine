"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var classnames_1 = require("classnames");
var react_redux_1 = require("react-redux");
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    changeValue: function (name, newValue) {
        var newSize = ownProps.checked ? '' : newValue;
        dispatch(redux_form_1.change(ownProps.formName, name, newSize));
    }
}); };
var connected = react_redux_1.connect(null, mapDispatchToProps);
var SizeElement = function (props) {
    var _a;
    var className = props.className, viewType = props.viewType, size = props.size, checked = props.checked, name = props.input.name;
    var mainClass = viewType == 'product' ? 'product__size' : 'goods__size';
    var classes = classnames_1.default(mainClass + "-item " + (className ? className : ''), (_a = {},
        _a[mainClass + "-item_active"] = checked,
        _a));
    return (React.createElement("li", { className: classes, onClick: function () { return props.changeValue(name, size); } }, size));
};
exports.default = connected(SizeElement);

//# sourceMappingURL=SizeElement.js.map
