"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PaymentList_1 = require("./PaymentList");
var PaymentTypes_1 = require("./PaymentTypes");
var Payment = function () { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "payment my-pad row" },
        React.createElement(PaymentList_1.default, null),
        React.createElement(PaymentTypes_1.default, null)),
    React.createElement("div", { className: "space-between row mb-10" },
        React.createElement("div", null),
        React.createElement("button", { type: "submit", className: "check__but" }, "Place order")))); };
exports.default = Payment;

//# sourceMappingURL=index.js.map
