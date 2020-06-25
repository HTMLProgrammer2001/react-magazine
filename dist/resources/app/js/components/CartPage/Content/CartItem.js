import * as React from 'react';
var CartItem = function (props) { return (React.createElement("div", { className: "table__row" },
    React.createElement("div", { className: "table__col orders__product" },
        React.createElement("img", { className: "orders__img", src: props.product.photo, alt: "Product picture" }),
        React.createElement("div", null,
            React.createElement("div", { className: "orders__name" }, props.product.name),
            React.createElement("div", { className: "orders__color" },
                React.createElement("div", { className: "goods__color-item goods__color-item_black" }),
                React.createElement("div", { className: "orders__size" }, props.size)))),
    React.createElement("div", { className: "table__col orders__price" }, props.product.price),
    React.createElement("div", { className: "table__col orders__quantity" },
        React.createElement("div", { className: "order__quantity" },
            React.createElement("span", { className: "order__quantity-count", contentEditable: "true" }, props.count))),
    React.createElement("div", { className: "table__col orders__total" }, props.count * props.product.price),
    React.createElement("div", { className: "table__col orders__remove" },
        React.createElement("i", { className: "fas fa-times cur" })))); };
export default CartItem;
//# sourceMappingURL=CartItem.js.map