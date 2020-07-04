"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var cartActions_1 = require("../../../../redux/Actions/cartActions");
var mapStateToProps = function (state) { return ({
    cartItems: state.cart
}); };
var mapDispatchToProps = function (dispatch) { return ({
    removeItem: function (index) {
        dispatch(cartActions_1.cartRemove(index));
    }
}); };
var connected = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var CartList = function (props) {
    var cartPrice = props.cartItems.reduce(function (prev, data) { return (prev + data.product.price * data.count); }, 0);
    return (React.createElement("ul", { className: "header__product-list" },
        !props.cartItems.length && React.createElement("b", null, "\u041D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"),
        props.cartItems.map(function (item, index) { return (React.createElement("li", { className: "header__product-item", key: index, onClick: function () { return props.removeItem(index); } },
            React.createElement("span", null,
                item.product.name,
                " x ",
                item.count),
            React.createElement("span", null,
                "$",
                (item.product.price * item.count).toFixed(2)),
            React.createElement("span", null, "\u00D7"))); }),
        props.cartItems.length &&
            React.createElement("li", { className: "header__product-item" },
                React.createElement("b", null, "Total"),
                React.createElement("span", null),
                React.createElement("b", null,
                    "$",
                    cartPrice.toFixed(2)))));
};
exports.default = connected(CartList);

//# sourceMappingURL=CartList.js.map
