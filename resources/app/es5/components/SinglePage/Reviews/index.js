"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReviewForm_1 = require("./ReviewForm");
var ReviewsList_1 = require("./ReviewsList");
var Reviews = function (props) { return (React.createElement("div", { className: "reviews my-pad" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "reviews__head" }, "Reviews"),
        React.createElement(ReviewForm_1.default, { onSubmit: function (vals) { return console.log(vals); } }),
        React.createElement(ReviewsList_1.default, { productID: props.productID })))); };
exports.default = Reviews;

//# sourceMappingURL=index.js.map
