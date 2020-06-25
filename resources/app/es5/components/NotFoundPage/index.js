"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Paginate_1 = require("../Paginate");
var NotFoundPage = function () {
    React.useEffect(function () {
        document.title = '404 | Not found';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{ name: 'Home', path: '/' }, { name: 'Not found', path: '/404' }] }),
        React.createElement("div", { className: "error" },
            React.createElement("img", { className: "error__img", src: "/image/not-found.png", alt: "Not found" }))));
};
exports.default = NotFoundPage;

//# sourceMappingURL=index.js.map
