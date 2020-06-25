"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var SelectElement_1 = require("../../../FormElements/SelectElement");
var GoodsHeaderForm = function (props) { return (React.createElement("form", { onSubmit: props.handleSubmit },
    React.createElement(redux_form_1.Field, { component: SelectElement_1.default, name: "type", options: ['All', 'Featured products'] }))); };
exports.default = redux_form_1.reduxForm({
    form: 'headerForm',
    initialValues: {
        type: 'All'
    },
    onChange: function (values, dispatch, props) {
        dispatch(redux_form_1.submit('headerForm'));
    }
})(GoodsHeaderForm);

//# sourceMappingURL=GoodsHeaderForm.js.map
