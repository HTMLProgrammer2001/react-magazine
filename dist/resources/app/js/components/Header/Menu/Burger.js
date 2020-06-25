import * as React from 'react';
import c from 'classnames';
var Burger = function (props) {
    var burgerClasses = c('burger header__icon', {
        active: props.isOpen
    });
    return (React.createElement("div", { className: burgerClasses, onClick: function () {
            props.changeOpen(function (prev) { return !prev; });
        } },
        React.createElement("div", { className: "burger__body" },
            React.createElement("span", { className: "burger__item" }),
            React.createElement("span", { className: "burger__item" }),
            React.createElement("span", { className: "burger__item" }))));
};
export default Burger;
//# sourceMappingURL=Burger.js.map