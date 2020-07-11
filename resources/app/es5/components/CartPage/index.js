"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Paginate_1 = require("../Paginate");
var Empty_1 = require("./Empty");
var Content_1 = require("./Content/");
var mapStateToProps = function (state) { return ({
    isEmpty: !state.cart.length
}); };
var cartConnected = react_redux_1.connect(mapStateToProps);
var CartPage = function (props) {
    React.useEffect(function () {
        document.title = 'Cart';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [{ name: 'Home', path: '/' }, { name: 'Cart', path: '/cart' }] }),
        props.isEmpty ? React.createElement(Empty_1.default, null) : React.createElement(Content_1.default, null)));
};
exports.default = cartConnected(CartPage);

//# sourceMappingURL=index.js.map
