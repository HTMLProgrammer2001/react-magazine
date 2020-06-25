"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var InputElement_1 = require("../FormElements/InputElement");
var RegisterForm = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("form", { onSubmit: props.handleSubmit, className: "login my-pad" },
        React.createElement("div", { className: "login__head" }, "Sign in"),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "text", name: "firstName", placeholder: "First name", required: true }),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "text", name: "lastName", placeholder: "Last name", required: true }),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "text", name: "email", placeholder: "Email", required: true }),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "password", name: "password", placeholder: "Password", required: true }),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "password", name: "confirmPassword", placeholder: "Confirm password", required: true }),
        React.createElement("div", { className: "row space-between my-pad w-100" },
            React.createElement("div", null),
            React.createElement("button", { type: "submit", className: "check__but" }, "Sign in"))))); };
exports.default = redux_form_1.reduxForm({
    form: 'register'
})(RegisterForm);

//# sourceMappingURL=RegisterForm.js.map
