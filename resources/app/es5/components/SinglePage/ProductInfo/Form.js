"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var ColorGroup_1 = require("../../FormElements/ColorGroup");
var AddCartForm = function (props) { return (React.createElement("form", { onSubmit: props.handleSubmit },
    React.createElement("div", { className: "row space-between product__facilities" },
        React.createElement("div", { className: "product__size row" },
            React.createElement("p", null, "Size:"),
            React.createElement("ul", { className: "product__size-list" },
                React.createElement("li", { className: "product__size-item" }, "XS"),
                React.createElement("li", { className: "product__size-item" }, "S"),
                React.createElement("li", { className: "product__size-item product__size-item_active" }, "M"),
                React.createElement("li", { className: "product__size-item" }, "L"))),
        React.createElement("div", { className: "product__color row" },
            React.createElement("p", null, "Color:"),
            React.createElement(redux_form_1.Field, { component: ColorGroup_1.default, name: "color", colors: ['red', 'green', 'blue'] }))),
    React.createElement("div", { className: "my-pad" },
        React.createElement("div", { className: "order" },
            React.createElement("div", { className: "order__quantity" },
                React.createElement("b", { className: "order__quantity-head" }, "Quantity:"),
                React.createElement("span", { className: "order__quantity-count", contentEditable: true }, "1")),
            React.createElement("div", { className: "order__actions row mt-2" },
                React.createElement("div", { className: "order__like" },
                    React.createElement("i", { className: "fas fa-heart" })),
                React.createElement("div", { className: "order__add" }, "Add to cart")))))); };
exports.default = redux_form_1.reduxForm({
    form: 'addCart'
})(AddCartForm);

//# sourceMappingURL=Form.js.map
