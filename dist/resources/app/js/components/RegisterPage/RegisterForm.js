import * as React from 'react';
import { reduxForm, Field } from 'redux-form';
import InputElement from '../FormElements/InputElement';
var RegisterForm = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("form", { onSubmit: props.handleSubmit, className: "login my-pad" },
        React.createElement("div", { className: "login__head" }, "Sign in"),
        React.createElement(Field, { component: InputElement, type: "text", name: "firstName", placeholder: "First name", required: true }),
        React.createElement(Field, { component: InputElement, type: "text", name: "lastName", placeholder: "Last name", required: true }),
        React.createElement(Field, { component: InputElement, type: "text", name: "email", placeholder: "Email", required: true }),
        React.createElement(Field, { component: InputElement, type: "password", name: "password", placeholder: "Password", required: true }),
        React.createElement(Field, { component: InputElement, type: "password", name: "confirmPassword", placeholder: "Confirm password", required: true }),
        React.createElement("div", { className: "row space-between my-pad w-100" },
            React.createElement("div", null),
            React.createElement("button", { type: "submit", className: "check__but" }, "Sign in"))))); };
export default reduxForm({
    form: 'thunkRegister.ts'
})(RegisterForm);
//# sourceMappingURL=RegisterForm.js.map
