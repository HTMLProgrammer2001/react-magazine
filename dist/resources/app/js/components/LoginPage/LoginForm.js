import * as React from 'react';
import { reduxForm, Field } from 'redux-form';
import InputElement from '../FormElements/InputElement';
var LoginForm = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("form", { onSubmit: props.handleSubmit, className: "login my-pad" },
        React.createElement("div", { className: "login__head" }, "Login"),
        React.createElement(Field, { component: InputElement, type: "text", name: "email", placeholder: "Email", required: true }),
        React.createElement(Field, { component: InputElement, type: "password", name: "password", placeholder: "Password", required: true }),
        React.createElement("div", { className: "row space-between my-pad w-100" },
            React.createElement("div", null),
            React.createElement("button", { type: "submit", className: "check__but" }, "Login"))))); };
export default reduxForm({
    form: 'login'
})(LoginForm);
//# sourceMappingURL=LoginForm.js.map