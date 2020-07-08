"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var InputElement_1 = require("../FormElements/InputElement");
var RegisterForm = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("form", { onSubmit: props.handleSubmit, className: "login my-pad", noValidate: true },
        React.createElement("div", { className: "login__head" }, "Sign in"),
        props.registration.error &&
            React.createElement("div", { className: "red" }, props.registration.error),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "text", name: "fullName", placeholder: "Full name", required: true }),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "text", name: "email", placeholder: "Email", required: true }),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "password", name: "password", placeholder: "Password", required: true }),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "password", name: "password_confirmation", placeholder: "Confirm password", required: true }),
        React.createElement("div", { className: "row space-between my-pad w-100" },
            React.createElement("div", null),
            React.createElement("button", { type: "submit", className: "check__but" }, props.registration.isLoading ? 'Loading...' : 'Sign in'))))); };
var validate = function (values) {
    var _a, _b;
    var errors = {};
    if (((_a = values.fullName) === null || _a === void 0 ? void 0 : _a.trim().split(' ').length) != 2) {
        errors.fullName = 'Enter name and surname';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Incorrect email';
    }
    if (((_b = values.password) === null || _b === void 0 ? void 0 : _b.length) < 8) {
        errors.password = 'Password must be at least 8 chars';
    }
    if (values.password_confirmation != values.password) {
        errors.password_confirmation = 'Passwords are not equals';
    }
    return errors;
};
exports.default = redux_form_1.reduxForm({
    form: 'thunkRegister.ts',
    validate: validate
})(RegisterForm);

//# sourceMappingURL=RegisterForm.js.map
