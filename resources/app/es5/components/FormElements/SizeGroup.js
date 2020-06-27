"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var SizeElement_1 = require("./SizeElement");
var SizeGroup = function (props) {
    var sizes = props.sizes, _a = props.input, value = _a.value, name = _a.name;
    return (React.createElement("ul", { className: "goods__size" }, sizes.map(function (size, index) { return (React.createElement(redux_form_1.Field, { component: SizeElement_1.default, key: index, name: name, size: size, checked: value == size })); })));
};
exports.default = SizeGroup;

//# sourceMappingURL=SizeGroup.js.map
