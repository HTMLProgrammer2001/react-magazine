"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var CheckboxGroup_1 = require("../../../FormElements/CheckboxGroup");
var ColorGroup_1 = require("../../../FormElements/ColorGroup");
var GoodsForm = function (props) { return (React.createElement("form", { className: "goods__form", onSubmit: props.handleSubmit },
    React.createElement("div", { className: "goods__form-head" }, "Product Categories"),
    React.createElement("div", { className: "goods__categories" },
        React.createElement(redux_form_1.Field, { component: CheckboxGroup_1.default, name: "categories", options: ['T1', 'T2', 'T3'] })),
    React.createElement("div", { className: "goods__form-head" }, "Filter by color"),
    React.createElement("div", { className: "goods__color" },
        React.createElement(redux_form_1.Field, { component: ColorGroup_1.default, name: "color", colors: ['red', 'green', 'yellow', 'black'] })),
    React.createElement("div", { className: "goods__form-head" }, "Filter by size"),
    React.createElement("ul", { className: "goods__size" },
        React.createElement("li", { className: "goods__size-item" }, "XS"),
        React.createElement("li", { className: "goods__size-item goods__size-item_active" }, "S"),
        React.createElement("li", { className: "goods__size-item" }, "M"),
        React.createElement("li", { className: "goods__size-item" }, "L"),
        React.createElement("li", { className: "goods__size-item" }, "XL")),
    React.createElement("div", { className: "goods__form-head" }, "Filter by price"),
    React.createElement("div", { className: "goods__price" },
        React.createElement("div", { className: "goods__price-point left" }),
        React.createElement("div", { className: "goods__price-indicator" }),
        React.createElement("div", { className: "goods__price-point right" })),
    React.createElement("div", { className: "goods__price-range" }, "Price: $5 - $100"),
    React.createElement("button", { type: "submit", className: "goods__form-button" }, "Filter"))); };
exports.default = redux_form_1.reduxForm({
    form: 'productFilter',
    initialValues: {
        categories: {},
        color: ''
    }
})(GoodsForm);

//# sourceMappingURL=index.js.map
