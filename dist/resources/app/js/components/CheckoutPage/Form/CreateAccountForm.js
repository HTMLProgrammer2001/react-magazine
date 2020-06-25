import * as React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import CheckboxElement from '../../FormElements/CheckboxElement';
import InputElement from '../../FormElements/InputElement';
var selector = formValueSelector('billing');
var connected = connect(function (state) { return ({
    isCreate: selector(state, 'create')
}); });
var AccountForm = function (props) { return (React.createElement(React.Fragment, null,
    React.createElement(Field, { component: CheckboxElement, name: "create", placeholder: "Create account?" }),
    props.isCreate &&
        React.createElement("div", { className: "row my-pad" },
            React.createElement(Field, { component: InputElement, name: "password", placeholder: "Password", className: "mr-1", required: true }),
            React.createElement(Field, { component: InputElement, name: "passwordConfirm", placeholder: "Password confirmation", className: "ml-1", required: true })))); };
export default connected(AccountForm);
//# sourceMappingURL=CreateAccountForm.js.map