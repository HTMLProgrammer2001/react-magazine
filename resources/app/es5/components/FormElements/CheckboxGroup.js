"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var CheckboxElement_1 = require("./CheckboxElement");
var CheckboxGroup = function (props) {
    var options = props.options, _a = props.input, value = _a.value, name = _a.name;
    return (React.createElement(React.Fragment, null, options.map(function (option, index) { return (React.createElement(redux_form_1.Field, { component: CheckboxElement_1.default, placeholder: option, key: index, style: { margin: '5px 0' }, name: name + "[" + option + "]", checked: !!value[option] })); })));
};
exports.default = CheckboxGroup;

//# sourceMappingURL=CheckboxGroup.js.map
