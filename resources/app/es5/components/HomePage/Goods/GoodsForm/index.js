"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var CheckboxGroup_1 = require("../../../FormElements/CheckboxGroup");
var ColorGroup_1 = require("../../../FormElements/ColorGroup");
var SizeGroup_1 = require("../../../FormElements/SizeGroup");
var Slider_1 = require("../../../FormElements/Slider");
var selector = redux_form_1.formValueSelector('productFilter');
var connected = react_redux_1.connect(function (state) { return ({
    range: selector(state, 'priceRange')
}); });
var GoodsForm = function (props) {
    var _a, _b;
    return (React.createElement("form", { className: "goods__form", onSubmit: props.handleSubmit },
        React.createElement("div", { className: "goods__form-head" }, "Product Categories"),
        React.createElement("div", { className: "goods__categories" },
            React.createElement(redux_form_1.Field, { component: CheckboxGroup_1.default, name: "categories", options: ['T1', 'T2', 'T3'] })),
        React.createElement("div", { className: "goods__form-head" }, "Filter by color"),
        React.createElement("div", { className: "goods__color" },
            React.createElement(redux_form_1.Field, { component: ColorGroup_1.default, name: "color", colors: ['red', 'green', 'yellow', 'black'] })),
        React.createElement("div", { className: "goods__form-head" }, "Filter by size"),
        React.createElement(redux_form_1.Field, { component: SizeGroup_1.default, name: "size", sizes: ['XS', 'S', 'M', 'L', 'XL'] }),
        React.createElement("div", { className: "goods__form-head" }, "Filter by price"),
        React.createElement(redux_form_1.Field, { component: Slider_1.default, name: "priceRange", min: 0, max: 1000 }),
        React.createElement("div", { className: "goods__price-range" },
            "Price: $", (_a = props.range) === null || _a === void 0 ? void 0 :
            _a.from.toFixed(2),
            " - $", (_b = props.range) === null || _b === void 0 ? void 0 :
            _b.to.toFixed(2)),
        React.createElement("button", { type: "submit", className: "goods__form-button" }, "Filter")));
};
var GoodsFormRedux = redux_form_1.reduxForm({
    form: 'productFilter',
    initialValues: {
        categories: {},
        color: '',
        size: 'S',
        priceRange: {
            from: 100,
            to: 500
        }
    }
})(GoodsForm);
exports.default = connected(GoodsFormRedux);

//# sourceMappingURL=index.js.map
