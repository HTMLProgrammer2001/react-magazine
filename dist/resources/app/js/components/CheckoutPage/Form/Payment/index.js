import * as React from 'react';
import PaymentList from './PaymentList';
import PaymentTypes from './PaymentTypes';
var Payment = function () { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "payment my-pad row" },
        React.createElement(PaymentList, null),
        React.createElement(PaymentTypes, null)),
    React.createElement("div", { className: "space-between row mb-10" },
        React.createElement("div", null),
        React.createElement("button", { type: "submit", className: "check__but" }, "Place order")))); };
export default Payment;
//# sourceMappingURL=index.js.map