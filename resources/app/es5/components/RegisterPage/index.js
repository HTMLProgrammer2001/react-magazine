"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Paginate_1 = require("../Paginate");
var RegisterForm_1 = require("./RegisterForm");
var thunkRegister_1 = require("../../redux/ThunkActions/thunkRegister");
var mapStateToProps = function (state) { return ({
    registration: state.register
}); };
var mapDispatchToProps = function (dispatch) { return ({
    register: function (vals) {
        dispatch(thunkRegister_1.default(vals, 'thunkRegister.ts'));
    }
}); };
var connected = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var RegisterPage = function (props) {
    var submit = function (values) {
        console.log(values);
        props.register(values);
    };
    React.useEffect(function () {
        document.title = 'Sign in';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{ name: 'Home', path: '/' }, { name: 'Register', path: '/register' }] }),
        props.registration.message ?
            React.createElement("div", null, props.registration.message) :
            null,
        React.createElement(RegisterForm_1.default, { onSubmit: submit, registration: props.registration })));
};
exports.default = connected(RegisterPage);

//# sourceMappingURL=index.js.map
