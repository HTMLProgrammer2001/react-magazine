import * as React from 'react';
import { reduxForm, Field } from 'redux-form';
import InputElement from '../FormElements/InputElement';
var ResetForm = function (props) { return (React.createElement("form", { className: "reset", onSubmit: props.handleSubmit },
    React.createElement("div", { className: "container my-pad" },
        React.createElement("div", { className: "login__head" }, "Reset password"),
        React.createElement(Field, { component: InputElement, type: "email", name: "email", placeholder: "Email", required: true }),
        React.createElement("div", { className: "row space-between my-pad w-100" },
            React.createElement("div", null),
            React.createElement("button", { type: "submit", className: "check__but" }, "Reset"))))); };
export default reduxForm({
    form: 'reset'
})(ResetForm);
//# sourceMappingURL=ResetForm.js.map