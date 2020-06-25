"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var ColorElement_1 = require("./ColorElement");
var ColorGroup = function (props) {
    var colors = props.colors, _a = props.input, value = _a.value, name = _a.name;
    return (React.createElement(React.Fragment, null, colors.map(function (color, index) { return (React.createElement(redux_form_1.Field, { component: ColorElement_1.default, key: index, name: name, color: color, checked: value == color })); })));
};
exports.default = ColorGroup;

//# sourceMappingURL=ColorGroup.js.map
