"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var SelectElement_1 = require("../../FormElements/SelectElement");
var GoodsHeaderForm = function (props) { return (React.createElement("form", { onSubmit: props.handleSubmit },
    React.createElement(redux_form_1.Field, { component: SelectElement_1.default, name: "type", options: ['New first', 'Old first', 'Best first', 'Worse first'] }))); };
exports.default = redux_form_1.reduxForm({
    form: 'sortReviewsForm',
    initialValues: {
        type: 'New first'
    },
    onChange: function (values, dispatch) {
        dispatch(redux_form_1.submit('sortReviewsForm'));
    }
})(GoodsHeaderForm);

//# sourceMappingURL=ReviewSortForm.js.map
