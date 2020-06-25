import * as React from 'react';
import { connect } from 'react-redux';
import Paginate from '../Paginate';
import Empty from './Empty';
import Content from './Content/';
var mapStateToProps = function (state) { return ({
    cart: state.cart
}); };
var cartConnected = connect(mapStateToProps);
var CartPage = function (props) {
    React.useEffect(function () {
        document.title = 'Cart';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [{ name: 'Home', path: '/' }, { name: 'Cart', path: '/cart' }] }),
        props.cart.length ? React.createElement(Content, { cartItems: props.cart }) : React.createElement(Empty, null)));
};
export default cartConnected(CartPage);
//# sourceMappingURL=index.js.map