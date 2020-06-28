"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var classnames_1 = require("classnames");
var ColorGroup_1 = require("../../FormElements/ColorGroup");
var SizeGroup_1 = require("../../FormElements/SizeGroup");
var AddCartForm = function (props) {
    var _a = React.useState(props.liked), isLiked = _a[0], changeLike = _a[1];
    return (React.createElement("form", { onSubmit: props.handleSubmit },
        React.createElement("div", { className: "row space-between product__facilities" },
            React.createElement("div", { className: "product__size row" },
                React.createElement("p", null, "Size:"),
                React.createElement(redux_form_1.Field, { component: SizeGroup_1.default, name: "size", viewType: "product", formName: props.form, sizes: props.sizes })),
            React.createElement("div", { className: "product__color row" },
                React.createElement("p", null, "Color:"),
                React.createElement(redux_form_1.Field, { component: ColorGroup_1.default, name: "color", formName: props.form, colors: props.colors }))),
        React.createElement("div", { className: "my-pad" },
            React.createElement("div", { className: "order" },
                React.createElement("div", { className: "order__quantity" },
                    React.createElement("b", { className: "order__quantity-head" }, "Quantity:"),
                    React.createElement("span", { className: "order__quantity-count", contentEditable: true }, "1")),
                React.createElement("div", { className: "order__actions row mt-2" },
                    React.createElement("div", { className: classnames_1.default('order__like', { 'order__like_active': isLiked }), onClick: function () { return changeLike(!isLiked); } },
                        React.createElement("i", { className: "fas fa-heart" })),
                    React.createElement("button", { type: "submit", className: "order__add" }, "Add to cart"))))));
};
exports.default = redux_form_1.reduxForm({
    form: 'addCart',
    initialValues: {
        color: '',
        size: ''
    }
})(AddCartForm);

//# sourceMappingURL=AddCartForm.js.map
