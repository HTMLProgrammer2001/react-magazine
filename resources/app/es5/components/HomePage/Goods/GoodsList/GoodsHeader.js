"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GoodsHeaderForm_1 = require("./GoodsHeaderForm");
var GoodsHeader = function (props) { return (React.createElement("div", { className: "goods__head" },
    React.createElement("div", { className: "goods__head-count" },
        "Showing ",
        props.loaded,
        " of ",
        props.total,
        " products"),
    React.createElement(GoodsHeaderForm_1.default, { onSubmit: function (vals) {
            console.log('HeaderForm:', vals);
        } }))); };
exports.default = GoodsHeader;

//# sourceMappingURL=GoodsHeader.js.map
