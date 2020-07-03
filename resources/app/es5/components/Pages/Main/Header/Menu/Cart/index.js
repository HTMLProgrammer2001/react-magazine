"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var react_redux_1 = require("react-redux");
var CartDropdown_1 = require("./CartDropdown");
var mapStateToProps = function (state) { return ({
    count: state.cart.length
}); };
var connected = react_redux_1.connect(mapStateToProps);
var Cart = function (props) {
    var dropClasses = classnames_1.default('header__icon header__icon_badge dropdown', {
        active: props.openMenu == 'cart'
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: dropClasses },
            React.createElement("i", { className: "fas fa-shopping-bag dropdown__elem", onClick: function () {
                    props.changeOpen(function (prev) { return prev == 'cart' ? '' : 'cart'; });
                } }),
            React.createElement("span", { className: "badge" }, props.count),
            React.createElement(CartDropdown_1.default, null))));
};
exports.default = connected(Cart);

//# sourceMappingURL=index.js.map
