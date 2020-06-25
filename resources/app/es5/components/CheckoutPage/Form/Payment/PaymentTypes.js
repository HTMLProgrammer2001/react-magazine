"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var selector = redux_form_1.formValueSelector('billing');
var connected = react_redux_1.connect(function (state) { return ({
    type: selector(state, 'payment')
}); });
var PaymentTypes = function (props) { return (React.createElement("div", { className: "payment__types" },
    React.createElement("div", { className: "payment__head" }, "Payment"),
    React.createElement("div", { className: "payment__type" },
        React.createElement("div", { className: "radio" },
            React.createElement(redux_form_1.Field, { component: "input", type: "radio", name: "payment", value: "paypal", className: "radio__elem", id: "paypal" }),
            React.createElement("label", { className: "radio__label", htmlFor: "paypal" },
                React.createElement("span", null, "Paypal"))),
        React.createElement("div", { className: "payment__content " + (props.type != 'paypal' ? 'hidden' : '') }, "Paypal payment type")),
    React.createElement("div", { className: "payment__type" },
        React.createElement("div", { className: "radio" },
            React.createElement(redux_form_1.Field, { component: "input", type: "radio", name: "payment", value: "bank", className: "radio__elem", id: "bank" }),
            React.createElement("label", { className: "radio__label", htmlFor: "bank" },
                React.createElement("span", null, "Direct Bank Transfer"))),
        React.createElement("div", { className: "payment__content " + (props.type != 'bank' ? 'hidden' : '') }, "Direct bank transaction on our card")),
    React.createElement("div", { className: "payment__type" },
        React.createElement("div", { className: "radio" },
            React.createElement(redux_form_1.Field, { component: "input", type: "radio", name: "payment", value: "deliver", className: "radio__elem", id: "deliver" }),
            React.createElement("label", { className: "radio__label", htmlFor: "deliver" },
                React.createElement("span", null, "Cash on delivery"))),
        React.createElement("div", { className: "payment__content " + (props.type != 'deliver' ? 'hidden' : '') }, "You receive your order via post office and cash on delivery")))); };
exports.default = connected(PaymentTypes);

//# sourceMappingURL=PaymentTypes.js.map
