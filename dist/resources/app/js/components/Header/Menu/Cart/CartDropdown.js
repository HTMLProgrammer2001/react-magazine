import * as React from 'react';
import { Link } from 'react-router-dom';
import CartList from './CartList';
var CartDropdown = function () { return (React.createElement("div", { className: "dropdown__body" },
    React.createElement("div", { className: "dropdown__content" },
        React.createElement(CartList, null),
        React.createElement("div", { className: "row space-between w-100" },
            React.createElement(Link, { to: "/cart" },
                React.createElement("button", { type: "button", className: "check__but sm" }, "View Cart")),
            React.createElement(Link, { to: "/checkout" },
                React.createElement("button", { type: "button", className: "check__but sm" }, "Checkout")))))); };
export default CartDropdown;
//# sourceMappingURL=CartDropdown.js.map