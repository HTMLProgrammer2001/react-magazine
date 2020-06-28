"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var AddCartForm_1 = require("./AddCartForm");
var Mark_1 = require("../../Mark");
var Info = function (props) { return (React.createElement("div", { className: "product__info" },
    React.createElement("div", { className: "row space-between product__info-head" },
        React.createElement("div", { className: "product__name" }, props.product.name),
        React.createElement("div", { className: "product__price" },
            "$",
            props.product.price.toFixed(2))),
    React.createElement("div", { className: "product__description" }, props.product.description),
    React.createElement(AddCartForm_1.default, { colors: props.product.colors, sizes: props.product.sizes, liked: props.product.liked, onSubmit: function (vals) { return console.log(vals); } }),
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
exports.default = Info;

//# sourceMappingURL=Info.js.map
