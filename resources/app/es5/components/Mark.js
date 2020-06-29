"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Mark = function (props) { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "150px", height: "30px", viewBox: "0 0 2150 427", className: "reviews__mark" },
    React.createElement("defs", null,
        React.createElement("polygon", { points: "213.333,10.441 279.249,144.017 426.667,165.436 320,269.41\r\n\t\t\t\t\t\t 345.173,416.226 213.333,346.91 81.485,416.226 106.667,269.41\r\n\t\t\t\t\t\t 0,165.436 147.409,144.017 ", id: "star" })),
    React.createElement("clipPath", { id: "clip" }, new Array(5).fill(0).map(function (item, index) { return (React.createElement("use", { href: "#star", key: index, transform: "translate(" + index * 430 + ")" })); })),
    React.createElement("rect", { x: "0", y: "0", width: 2150 * props.rating / 5, height: "427", fill: "yellow", className: "reviews__mark-fill", style: { clipPath: 'url("#clip")' } }),
    new Array(5).fill(0).map(function (item, index) { return (React.createElement("use", { href: "#star", key: index, transform: "translate(" + index * 430 + ")", onClick: function () { return !props.fixed && props.onChange ? props.onChange(index + 1) : false; }, className: "reviews__mark-star" })); }))); };
exports.default = Mark;

//# sourceMappingURL=Mark.js.map
