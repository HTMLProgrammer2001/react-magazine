import * as React from 'react';
import { Link } from 'react-router-dom';
var EmptyCart = function () { return (React.createElement("div", { className: "empty my-pad" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "empty__text" }, "Your cart is current empty"),
        React.createElement(Link, { to: "/" },
            React.createElement("button", { type: "button", className: "empty__back" }, "Return to shop"))))); };
export default EmptyCart;
//# sourceMappingURL=Empty.js.map