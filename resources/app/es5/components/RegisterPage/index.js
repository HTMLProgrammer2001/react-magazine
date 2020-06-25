"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Paginate_1 = require("../Paginate");
var RegisterForm_1 = require("./RegisterForm");
var RegisterPage = function () {
    var submit = function (values) {
        console.log(values);
    };
    React.useEffect(function () {
        document.title = 'Sign in';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{ name: 'Home', path: '/' }, { name: 'Register', path: '/register' }] }),
        React.createElement(RegisterForm_1.default, { onSubmit: submit })));
};
exports.default = RegisterPage;

//# sourceMappingURL=index.js.map
