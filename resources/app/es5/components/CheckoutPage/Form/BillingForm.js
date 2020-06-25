"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var InputElement_1 = require("../../FormElements/InputElement");
var CreateAccountForm_1 = require("./CreateAccountForm");
var Payment_1 = require("./Payment/");
var BillingForm = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "billing my-pad" },
        React.createElement("div", { className: "billing__head" }, "Billing Details"),
        React.createElement("form", { className: "billing__form", onSubmit: props.handleSubmit, noValidate: true },
            React.createElement("div", { className: "row" },
                React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "First Name", name: "first", type: "text", className: "mr-1", required: true }),
                React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Last Name", name: "last", type: "text", className: "ml-1", required: true })),
            React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Company Name", name: "company", type: "text", required: true }),
            React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Country", name: "country", type: "text", required: true }),
            React.createElement("div", { className: "row" },
                React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Town / City", name: "city", type: "text", className: "mr-1", required: true }),
                React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Postcode / Zip", name: "postcode", type: "text", className: "ml-1", required: true })),
            React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Street Address", name: "address", type: "text", required: true }),
            React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Phone", name: "phone", type: "text", required: true }),
            React.createElement(redux_form_1.Field, { component: InputElement_1.default, placeholder: "Email address", name: "email", type: "email", required: true }),
            React.createElement(CreateAccountForm_1.default, null),
            React.createElement("div", null, "Order Notes"),
            React.createElement("div", { className: "text-muted" }, "Notes about your order like delivery species e.g."),
            React.createElement("div", { className: "input" },
                React.createElement(redux_form_1.Field, { component: "textarea", className: "input__elem", rows: 1, name: "notes" }),
                React.createElement("div", { className: "input__line", style: { bottom: '4px' } })),
            React.createElement(Payment_1.default, null))))); };
exports.default = redux_form_1.reduxForm({
    form: 'billing'
})(BillingForm);

//# sourceMappingURL=BillingForm.js.map
