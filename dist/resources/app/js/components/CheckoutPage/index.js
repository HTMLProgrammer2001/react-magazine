import * as React from 'react';
import Paginate from '../Paginate';
import Questions from './Questions';
import BillingForm from './Form/BillingForm';
var CheckoutPage = function () {
    React.useEffect(function () {
        document.title = 'Checkout';
    }, []);
    var onSubmit = function (vals) {
        console.log(vals);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [{
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Checkout',
                    path: '/checkout'
                }] }),
        React.createElement(Questions, null),
        React.createElement(BillingForm, { onSubmit: onSubmit })));
};
export default CheckoutPage;
//# sourceMappingURL=index.js.map