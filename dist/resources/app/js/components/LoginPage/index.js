import * as React from 'react';
import Paginate from '../Paginate';
import { default as LoginForm } from './LoginForm';
var LoginPage = function () {
    var submit = function (values) {
        console.log(values);
    };
    React.useEffect(function () {
        document.title = 'Login';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [{ name: 'Home', path: '/' }, { name: 'Login', path: '/login' }] }),
        React.createElement(LoginForm, { onSubmit: submit })));
};
export default LoginPage;
//# sourceMappingURL=index.js.map