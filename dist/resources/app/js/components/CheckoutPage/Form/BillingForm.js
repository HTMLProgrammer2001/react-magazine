import * as React from 'react';
import { reduxForm, Field } from 'redux-form';
import InputElement from '../../FormElements/InputElement';
import AccountForm from './CreateAccountForm';
import Payment from './Payment/';
var BillingForm = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "billing my-pad" },
        React.createElement("div", { className: "billing__head" }, "Billing Details"),
        React.createElement("form", { className: "billing__form", onSubmit: props.handleSubmit, noValidate: true },
            React.createElement("div", { className: "row" },
                React.createElement(Field, { component: InputElement, placeholder: "First Name", name: "first", type: "text", className: "mr-1", required: true }),
                React.createElement(Field, { component: InputElement, placeholder: "Last Name", name: "last", type: "text", className: "ml-1", required: true })),
            React.createElement(Field, { component: InputElement, placeholder: "Company Name", name: "company", type: "text", required: true }),
            React.createElement(Field, { component: InputElement, placeholder: "Country", name: "country", type: "text", required: true }),
            React.createElement("div", { className: "row" },
                React.createElement(Field, { component: InputElement, placeholder: "Town / City", name: "city", type: "text", className: "mr-1", required: true }),
                React.createElement(Field, { component: InputElement, placeholder: "Postcode / Zip", name: "postcode", type: "text", className: "ml-1", required: true })),
            React.createElement(Field, { component: InputElement, placeholder: "Street Address", name: "address", type: "text", required: true }),
            React.createElement(Field, { component: InputElement, placeholder: "Phone", name: "phone", type: "text", required: true }),
            React.createElement(Field, { component: InputElement, placeholder: "Email address", name: "email", type: "email", required: true }),
            React.createElement(AccountForm, null),
            React.createElement("div", null, "Order Notes"),
            React.createElement("div", { className: "text-muted" }, "Notes about your order like delivery species e.g."),
            React.createElement("div", { className: "input" },
                React.createElement(Field, { component: "textarea", className: "input__elem", rows: 1, name: "notes" }),
                React.createElement("div", { className: "input__line", style: { bottom: '4px' } })),
            React.createElement(Payment, null))))); };
export default reduxForm({
    form: 'billing'
})(BillingForm);
//# sourceMappingURL=BillingForm.js.map