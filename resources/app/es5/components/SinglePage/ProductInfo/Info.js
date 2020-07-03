"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var AddCartForm_1 = require("./AddCartForm");
var Mark_1 = require("../../Mark");
var cartActions_1 = require("../../../redux/Actions/cartActions");
var mapDispatchToProps = function (dispatch) { return ({
    addCart: function (formVals, product) {
        dispatch(cartActions_1.cartAdd({
            count: formVals.count,
            color: formVals.color,
            size: formVals.size,
            product: product
        }));
    }
}); };
var connected = react_redux_1.connect(function (state) { return ({}); }, mapDispatchToProps);
var Info = function (props) { return (React.createElement("div", { className: "product__info" },
    React.createElement("div", { className: "row space-between product__info-head" },
        React.createElement("div", { className: "product__name" }, props.product.name),
        React.createElement("div", { className: "product__price" },
            "$",
            props.product.price.toFixed(2))),
    React.createElement("div", { className: "product__description" }, props.product.description),
    React.createElement(AddCartForm_1.default, { colors: props.product.colors, sizes: props.product.sizes, liked: props.product.liked, initialValues: {
            count: 1,
            size: props.product.sizes[0],
            color: props.product.colors[0]
        }, onSubmit: function (vals) { return props.addCart(vals, props.product); } }),
    React.createElement("div", { className: "product__share" },
        React.createElement("b", null, "Share in:"),
        React.createElement("i", { className: "fab fa-facebook-f product__share-soc" }),
        React.createElement("i", { className: "fab fa-twitter product__share-soc" }),
        React.createElement("i", { className: "fab fa-pinterest-p product__share-soc" })),
    React.createElement("div", { className: "product__categories" },
        React.createElement("b", null, "Category:"),
        React.createElement("span", { className: "ml-1" },
            React.createElement(react_router_dom_1.Link, { to: "/categories/" + props.product.category }, props.product.category))),
    React.createElement("div", { className: "product__mark my-pad" },
        React.createElement("b", { className: "product__mark-head" }, "Average mark:"),
        React.createElement("span", null,
            React.createElement(Mark_1.default, { rating: props.product.mark, fixed: true }))))); };
exports.default = connected(Info);

//# sourceMappingURL=Info.js.map
