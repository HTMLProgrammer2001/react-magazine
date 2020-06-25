import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage/';
import RegisterPage from './RegisterPage/';
import NotFoundPage from './NotFoundPage/';
import HomePage from './HomePage/';
import CartPage from './CartPage/';
import ResetPage from './ResetPage/';
import CategoriesPage from './CategoriesPage/';
import CheckoutPage from './CheckoutPage/';
var Content = function () { return (React.createElement(Switch, null,
    React.createElement(Route, { path: '/', exact: true, component: HomePage }),
    React.createElement(Route, { path: '/login', exact: true, component: LoginPage }),
    React.createElement(Route, { path: '/register', exact: true, component: RegisterPage }),
    React.createElement(Route, { path: '/cart', exact: true, component: CartPage }),
    React.createElement(Route, { path: '/reset', exact: true, component: ResetPage }),
    React.createElement(Route, { path: '/categories', exact: true, component: CategoriesPage }),
    React.createElement(Route, { path: '/checkout', exact: true, component: CheckoutPage }),
    React.createElement(Route, { path: '/', component: NotFoundPage }))); };
export default Content;
//# sourceMappingURL=Content.js.map