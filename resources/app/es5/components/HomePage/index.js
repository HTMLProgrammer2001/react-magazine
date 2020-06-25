"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Paginate_1 = require("../Paginate");
var Goods_1 = require("./Goods/");
var HomePage = function () {
    React.useEffect(function () {
        document.title = 'Home | Products';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{ name: 'Home', path: '/' }] }),
        React.createElement(Goods_1.default, null)));
};
exports.default = HomePage;

//# sourceMappingURL=index.js.map
