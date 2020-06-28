"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Galery_1 = require("./Galery");
var Info_1 = require("./Info");
var ProductInfo = function (props) { return (React.createElement("div", { className: "product" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "row space-between product__content" },
            React.createElement(Galery_1.default, { images: props.product.images }),
            React.createElement(Info_1.default, { product: props.product }))))); };
exports.default = ProductInfo;

//# sourceMappingURL=index.js.map
