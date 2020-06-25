"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Paginate_1 = require("../Paginate");
var LoginForm_1 = require("./LoginForm");
var LoginPage = function () {
    var submit = function (values) {
        console.log(values);
    };
    React.useEffect(function () {
        document.title = 'Login';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{ name: 'Home', path: '/' }, { name: 'Login', path: '/login' }] }),
        React.createElement(LoginForm_1.default, { onSubmit: submit })));
};
exports.default = LoginPage;

//# sourceMappingURL=index.js.map
