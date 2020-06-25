import * as React from 'react';
import Paginate from '../Paginate';
import { default as RegisterForm } from './RegisterForm';
var RegisterPage = function () {
    var submit = function (values) {
        console.log(values);
    };
    React.useEffect(function () {
        document.title = 'Sign in';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [{ name: 'Home', path: '/' }, { name: 'Register', path: '/register' }] }),
        React.createElement(RegisterForm, { onSubmit: submit })));
};
export default RegisterPage;
//# sourceMappingURL=index.js.map