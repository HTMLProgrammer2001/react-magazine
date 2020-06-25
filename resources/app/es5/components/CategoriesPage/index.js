"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Paginate_1 = require("../Paginate");
var CategoriesList_1 = require("./CategoriesList");
var CategoriesPage = function () {
    React.useEffect(function () {
        document.title = 'Categories';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [
                { name: 'Home', path: '/' },
                { name: 'Categories', path: '/categories' }
            ] }),
        React.createElement(CategoriesList_1.default, null)));
};
exports.default = CategoriesPage;

//# sourceMappingURL=index.js.map
