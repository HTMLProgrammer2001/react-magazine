"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var LoginPage_1 = require("./LoginPage/");
var RegisterPage_1 = require("./RegisterPage/");
var NotFoundPage_1 = require("./NotFoundPage/");
var HomePage_1 = require("./HomePage/");
var CartPage_1 = require("./CartPage/");
var ResetPage_1 = require("./ResetPage/");
var CategoriesPage_1 = require("./CategoriesPage/");
var CheckoutPage_1 = require("./CheckoutPage/");
var SinglePage_1 = require("./SinglePage/");
var Content = function () { return (React.createElement(react_router_dom_1.Switch, null,
    React.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: HomePage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/login', exact: true, component: LoginPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/register', exact: true, component: RegisterPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/cart', exact: true, component: CartPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/reset', exact: true, component: ResetPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/categories', exact: true, component: CategoriesPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/checkout', exact: true, component: CheckoutPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/products/:slug', exact: true, component: SinglePage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/', component: NotFoundPage_1.default }))); };
exports.default = Content;

//# sourceMappingURL=Content.js.map
