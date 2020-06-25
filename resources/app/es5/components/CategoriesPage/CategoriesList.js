"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var CategoryItem_1 = require("./CategoryItem");
var mapStateToProps = function (state) { return ({
    categories: state.category.categories
}); };
var connected = react_redux_1.connect(mapStateToProps);
var CategoriesList = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "categories my-pad" },
        !props.categories.length && React.createElement("b", null, "\u041D\u0435\u0442 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439"),
        props.categories.map(function (category) { return (React.createElement(CategoryItem_1.default, { key: category.slug, category: category })); })))); };
exports.default = connected(CategoriesList);

//# sourceMappingURL=CategoriesList.js.map
