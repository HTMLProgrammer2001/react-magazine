import * as React from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
var mapStateToProps = function (state) { return ({
    categories: state.category.categories
}); };
var connected = connect(mapStateToProps);
var CategoriesList = function (props) { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "categories my-pad" },
        !props.categories.length && React.createElement("b", null, "\u041D\u0435\u0442 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439"),
        props.categories.map(function (category) { return (React.createElement(CategoryItem, { key: category.slug, category: category })); })))); };
export default connected(CategoriesList);
//# sourceMappingURL=CategoriesList.js.map