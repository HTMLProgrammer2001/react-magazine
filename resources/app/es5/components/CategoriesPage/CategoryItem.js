"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var CategoryItem = function (props) { return (React.createElement(react_router_dom_1.Link, { to: "/categories/" + props.category.slug, className: "categories__item" },
    React.createElement("img", { className: "categories__img", src: props.category.image, alt: "Category" }),
    React.createElement("div", { className: "categories__products center w-100", style: { flexDirection: 'column' } },
        React.createElement("div", null, props.category.name),
        React.createElement("div", null,
            props.category.productCount,
            " products")))); };
exports.default = CategoryItem;

//# sourceMappingURL=CategoryItem.js.map
