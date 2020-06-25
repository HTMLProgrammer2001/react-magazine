"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var Newsletter = function (props) { return (React.createElement("div", { className: "subscribe" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "subscribe__wrap" },
            React.createElement("div", { className: "subscribe__content" },
                React.createElement("div", { className: "subscribe__head" }, "Newsletter"),
                React.createElement("div", { className: "subscribe__desc" }, "Get timely updates from your favorite products"),
                React.createElement("form", { className: "subscribe__form", onSubmit: props.handleSubmit },
                    React.createElement("div", { className: "subscribe__form-wrap" },
                        React.createElement("i", { className: "fas fa-envelope subscribe__icon" }),
                        React.createElement(redux_form_1.Field, { component: "input", name: "email", className: "subscribe__email", placeholder: "Enter your email" })),
                    React.createElement("button", { type: "submit", className: "subscribe__but" },
                        React.createElement("i", { className: "fas fa-paper-plane" })))))))); };
exports.default = redux_form_1.reduxForm({
    form: 'newsletter'
})(Newsletter);

//# sourceMappingURL=Newsletter.js.map
