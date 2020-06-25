"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var InputElement_1 = require("../FormElements/InputElement");
var ResetForm = function (props) { return (React.createElement("form", { className: "reset", onSubmit: props.handleSubmit },
    React.createElement("div", { className: "container my-pad" },
        React.createElement("div", { className: "login__head" }, "Reset password"),
        React.createElement(redux_form_1.Field, { component: InputElement_1.default, type: "email", name: "email", placeholder: "Email", required: true }),
        React.createElement("div", { className: "row space-between my-pad w-100" },
            React.createElement("div", null),
            React.createElement("button", { type: "submit", className: "check__but" }, "Reset"))))); };
exports.default = redux_form_1.reduxForm({
    form: 'reset'
})(ResetForm);

//# sourceMappingURL=ResetForm.js.map
