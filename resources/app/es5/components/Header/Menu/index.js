"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var react_router_dom_1 = require("react-router-dom");
var Cart_1 = require("./Cart");
var Search_1 = require("./Search");
var Burger_1 = require("./Burger");
var Menu = function () {
    var _a = React.useState(''), openMenu = _a[0], changeMenu = _a[1];
    var _b = React.useState(false), isBurgerOpen = _b[0], changeBurger = _b[1];
    var menuClasses = classnames_1.default('header__links', {
        active: isBurgerOpen
    });
    return (React.createElement("nav", { className: "header__menu" },
        React.createElement("div", { className: menuClasses },
            React.createElement(react_router_dom_1.Link, { to: "/", className: "header__item" }, "Home"),
            React.createElement(react_router_dom_1.Link, { to: "/categories", className: "header__item" }, "Categories"),
            React.createElement(react_router_dom_1.Link, { to: "/profile", className: "header__item" }, "Profile")),
        React.createElement("div", { className: "header__icons" },
            React.createElement(Cart_1.default, { openMenu: openMenu, changeOpen: changeMenu }),
            React.createElement(Search_1.default, { openMenu: openMenu, changeOpen: changeMenu })),
        React.createElement(Burger_1.default, { isOpen: isBurgerOpen, changeOpen: changeBurger })));
};
exports.default = Menu;

//# sourceMappingURL=index.js.map