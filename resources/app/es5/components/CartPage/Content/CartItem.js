"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CartItem = function (props) { return (React.createElement("div", { className: "table__row" },
    React.createElement("div", { className: "table__col orders__product" },
        React.createElement("img", { className: "orders__img", src: props.product.photo, alt: "Product picture" }),
        React.createElement("div", null,
            React.createElement("div", { className: "orders__name" }, props.product.name),
            React.createElement("div", { className: "orders__color" },
                React.createElement("div", { className: "goods__color-item", style: { background: props.color } }),
                React.createElement("div", { className: "orders__size" }, props.size)))),
    React.createElement("div", { className: "table__col orders__price" }, props.product.price),
    React.createElement("div", { className: "table__col orders__quantity" },
        React.createElement("div", { className: "order__quantity" },
            React.createElement("span", { className: "order__quantity-count", contentEditable: "true" }, props.count))),
    React.createElement("div", { className: "table__col orders__total" }, props.count * props.product.price),
    React.createElement("div", { className: "table__col orders__remove" },
        React.createElement("i", { className: "fas fa-times cur" })))); };
exports.default = CartItem;

//# sourceMappingURL=CartItem.js.map
