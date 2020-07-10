"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Paginate_1 = require("../Paginate");
var ResetForm_1 = require("./ResetForm");
var thunkReset_1 = require("../../redux/ThunkActions/thunkReset");
var mapStateToProps = function (state) { return ({
    resetState: state.reset
}); };
var mapDispatchToProps = function (dispatch) { return ({
    reset: function (vals) {
        dispatch(thunkReset_1.default(vals, 'reset'));
    }
}); };
var connected = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var ResetPage = function (props) {
    React.useEffect(function () {
        document.title = 'Reset password';
    }, []);
    var onSubmit = function (vals) {
        props.reset(vals);
        console.log(vals);
    };
    console.log(props.resetState);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [
                { name: 'Home', path: '/' },
                { name: 'Reset password', path: '/reset' }
            ] }),
        React.createElement(ResetForm_1.default, { onSubmit: onSubmit, resetState: props.resetState })));
};
exports.default = connected(ResetPage);

//# sourceMappingURL=index.js.map
