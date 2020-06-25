"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GoodsList_1 = require("./GoodsList/");
var GoodsForm_1 = require("./GoodsForm/");
var Goods = function () { return (React.createElement("div", { className: "goods" },
    React.createElement("div", { className: "container" },
        React.createElement(GoodsList_1.default, null),
        React.createElement(GoodsForm_1.default, { onSubmit: function (vals) { return console.log(vals); } })))); };
exports.default = Goods;

//# sourceMappingURL=index.js.map
