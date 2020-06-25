import * as React from 'react';
import c from 'classnames';
import { connect } from 'react-redux';
import CartDropdown from './CartDropdown';
var mapStateToProps = function (state) { return ({
    count: state.cart.length
}); };
var connected = connect(mapStateToProps);
var Cart = function (props) {
    var dropClasses = c('header__icon header__icon_badge dropdown', {
        active: props.openMenu == 'cart'
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: dropClasses },
            React.createElement("i", { className: "fas fa-shopping-bag dropdown__elem", onClick: function () {
                    props.changeOpen(function (prev) { return prev == 'cart' ? '' : 'cart'; });
                } }),
            React.createElement("span", { className: "badge" }, props.count),
            React.createElement(CartDropdown, null))));
};
export default connected(Cart);
//# sourceMappingURL=index.js.map