import * as React from 'react';
import c from 'classnames';
var Search = function (props) {
    var searchClasses = c('header__icon dropdown', {
        active: props.openMenu == 'search'
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: searchClasses },
            React.createElement("i", { className: "fas fa-search dropdown__elem", onClick: function () {
                    props.changeOpen(function (prev) { return prev == 'search' ? '' : 'search'; });
                } }),
            React.createElement("div", { className: "dropdown__body" },
                React.createElement("div", { className: "dropdown__content" },
                    React.createElement("div", { className: "input" },
                        React.createElement("input", { className: "input__elem", required: true }),
                        React.createElement("label", { className: "input__label" }, "Search"),
                        React.createElement("div", { className: "input__line" })))))));
};
export default Search;
//# sourceMappingURL=Search.js.map