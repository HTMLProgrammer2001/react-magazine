"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Paginate_1 = require("../Paginate");
var LoginForm_1 = require("./LoginForm");
var thunkLogin_1 = require("../../redux/ThunkActions/thunkLogin");
var mapStateToProps = function (state) { return ({
    loginData: state.login
}); };
var mapDispatchToProps = function (dispatch) { return ({
    login: function (vals) {
        dispatch(thunkLogin_1.default(vals, 'login'));
    }
}); };
var connected = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var LoginPage = function (props) {
    var submit = function (values) {
        console.log(values);
        props.login(values);
    };
    React.useEffect(function () {
        document.title = 'Login';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{ name: 'Home', path: '/' }, { name: 'Login', path: '/login' }] }),
        React.createElement(LoginForm_1.default, { onSubmit: submit, loginData: props.loginData })));
};
exports.default = connected(LoginPage);

//# sourceMappingURL=index.js.map
