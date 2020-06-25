"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var CheckboxElement_1 = require("../../FormElements/CheckboxElement");
var InputElement_1 = require("../../FormElements/InputElement");
var selector = redux_form_1.formValueSelector('billing');
var connected = react_redux_1.connect(function (state) { return ({
    isCreate: selector(state, 'create')
}); });
var AccountForm = function (props) { return (React.createElement(React.Fragment, null,
    React.createElement(redux_form_1.Field, { component: CheckboxElement_1.default, name: "create", placeholder: "Create account?" }),
    props.isCreate &&
        React.createElement("div", { className: "row my-pad" },
            React.createElement(redux_form_1.Field, { component: InputElement_1.default, name: "password", placeholder: "Password", className: "mr-1", required: true }),
            React.createElement(redux_form_1.Field, { component: InputElement_1.default, name: "passwordConfirm", placeholder: "Password confirmation", className: "ml-1", required: true })))); };
exports.default = connected(AccountForm);

//# sourceMappingURL=CreateAccountForm.js.map
