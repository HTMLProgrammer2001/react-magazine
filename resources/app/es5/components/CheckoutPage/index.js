"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Paginate_1 = require("../Paginate");
var Questions_1 = require("./Questions");
var BillingForm_1 = require("./Form/BillingForm");
var CheckoutPage = function () {
    React.useEffect(function () {
        document.title = 'Checkout';
    }, []);
    var onSubmit = function (vals) {
        console.log(vals);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Checkout',
                    path: '/checkout'
                }] }),
        React.createElement(Questions_1.default, null),
        React.createElement(BillingForm_1.default, { onSubmit: onSubmit })));
};
exports.default = CheckoutPage;

//# sourceMappingURL=index.js.map
