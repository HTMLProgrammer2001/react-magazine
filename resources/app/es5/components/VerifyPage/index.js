"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Paginate_1 = require("../Paginate");
var thunkVerify_1 = require("../../redux/ThunkActions/thunkVerify");
var mapStateToProps = function (state) { return ({
    verifyState: state.verify
}); };
var mapDispatchToProps = function (dispatch) { return ({
    verify: function (id) {
        dispatch(thunkVerify_1.default(id));
    }
}); };
var connected = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var VerifyPage = function (props) {
    React.useEffect(function () {
        props.verify(props.match.params.id);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [
                { name: 'Home', path: '/' },
                { name: 'Verify email', path: '/verify' }
            ] }),
        props.verifyState.isLoading && React.createElement("div", null, "Loading..."),
        React.createElement("div", null, props.verifyState.message ?
            props.verifyState.message :
            props.verifyState.error)));
};
exports.default = connected(VerifyPage);

//# sourceMappingURL=index.js.map
