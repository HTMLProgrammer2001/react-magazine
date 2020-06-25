import * as React from 'react';
import c from 'classnames';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Search from './Search';
import Burger from './Burger';
var Menu = function () {
    var _a = React.useState(''), openMenu = _a[0], changeMenu = _a[1];
    var _b = React.useState(false), isBurgerOpen = _b[0], changeBurger = _b[1];
    var menuClasses = c('header__links', {
        active: isBurgerOpen
    });
    return (React.createElement("nav", { className: "header__menu" },
        React.createElement("div", { className: menuClasses },
            React.createElement(Link, { to: "/", className: "header__item" }, "Home"),
            React.createElement(Link, { to: "/categories", className: "header__item" }, "Categories"),
            React.createElement(Link, { to: "/profile", className: "header__item" }, "Profile")),
        React.createElement("div", { className: "header__icons" },
            React.createElement(Cart, { openMenu: openMenu, changeOpen: changeMenu }),
            React.createElement(Search, { openMenu: openMenu, changeOpen: changeMenu })),
        React.createElement(Burger, { isOpen: isBurgerOpen, changeOpen: changeBurger })));
};
export default Menu;
//# sourceMappingURL=index.js.map