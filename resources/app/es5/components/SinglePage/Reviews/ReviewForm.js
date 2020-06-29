"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var InputElement_1 = require("../../FormElements/InputElement");
var MarkElement_1 = require("../../FormElements/MarkElement");
var ReviewForm = function (props) { return (React.createElement("form", { className: "reviews__form", onSubmit: props.handleSubmit, noValidate: true },
    React.createElement("div", { className: "row" },
        React.createElement("img", { className: "reviews__ava", src: "/image/ava.png", alt: "Ava" }),
        React.createElement("div", { className: "reviews__wrap" },
            React.createElement(redux_form_1.Field, { component: MarkElement_1.default, name: "mark", formName: props.form }),
            React.createElement("div", { className: "reviews__comment" },
                React.createElement(redux_form_1.Field, { component: InputElement_1.default, name: "email", placeholder: "Email", required: true }),
                React.createElement(redux_form_1.Field, { component: InputElement_1.default, name: "userName", placeholder: "Name", required: true }),
                React.createElement("div", { className: "input" },
                    React.createElement(redux_form_1.Field, { component: "textarea", className: "input__elem", rows: 1, required: true, name: "message" }),
                    React.createElement("label", { className: "input__label" }, "Message"),
                    React.createElement("div", { className: "input__line", style: { bottom: '4px' } })),
                React.createElement("button", { type: "submit", className: "reviews__but" }, "Send")))))); };
exports.default = redux_form_1.reduxForm({
    form: 'productReview',
    initialValues: {
        mark: 0,
        email: '',
        name: '',
        message: ''
    }
})(ReviewForm);

//# sourceMappingURL=ReviewForm.js.map
