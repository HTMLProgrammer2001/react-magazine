"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var SizeElement_1 = require("./SizeElement");
var SizeGroup = function (props) {
    var sizes = props.sizes, formName = props.formName, viewType = props.viewType, _a = props.input, value = _a.value, name = _a.name;
    var mainClass = viewType == 'product' ? 'product__size' : 'goods__size';
    return (React.createElement("ul", { className: mainClass + " " + mainClass + "-list" }, sizes.map(function (size, index) { return (React.createElement(redux_form_1.Field, { component: SizeElement_1.default, key: index, name: name, size: size, formName: formName, viewType: viewType, checked: value == size })); })));
};
exports.default = SizeGroup;

//# sourceMappingURL=SizeGroup.js.map
