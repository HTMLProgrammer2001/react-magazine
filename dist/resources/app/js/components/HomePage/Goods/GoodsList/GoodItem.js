import * as React from 'react';
import { Link } from 'react-router-dom';
var GoodItem = function (props) { return (React.createElement("div", { className: "goods__list-product" },
    React.createElement(Link, { to: "/products/" + props.product.slug, className: "w-100" },
        React.createElement("img", { className: "goods__list-photo w-100", src: props.product.photo, alt: "Product photo" })),
    React.createElement("div", { className: "goods__list-info" },
        React.createElement("div", { className: "goods__list-name" }, props.product.name),
        React.createElement("div", { className: "goods__list-price" }, props.product.price)))); };
export default GoodItem;
//# sourceMappingURL=GoodItem.js.map