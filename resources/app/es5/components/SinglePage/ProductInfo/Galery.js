"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
exports.Gallery = function (props) {
    var _a = React.useState(0), curImage = _a[0], changeImage = _a[1];
    return (React.createElement("div", { className: "product__images" },
        React.createElement("div", { className: "product__image product__image_lg" },
            React.createElement("img", { src: props.images[curImage] || '/image/product.png', alt: "Product photo" })),
        React.createElement("div", { className: "row space-between center" }, props.images.map(function (image, index) {
            var prodClass = classnames_1.default('product__image product__image_sm cur', {
                'product__image_active': curImage == index
            });
            return (React.createElement("div", { className: prodClass, key: index, onClick: function () { return changeImage(index); } },
                React.createElement("img", { src: image, width: "100%", alt: "Gallery photo" })));
        }))));
};
exports.default = exports.Gallery;

//# sourceMappingURL=Galery.js.map
