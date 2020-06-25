import * as React from 'react';
import CartTable from './CartTable';
import Checkout from './Checkout';
var Content = function (props) { return (React.createElement(React.Fragment, null,
    React.createElement(CartTable, { cartItems: props.cartItems }),
    React.createElement(Checkout, { cartItems: props.cartItems }))); };
export default Content;
//# sourceMappingURL=index.js.map