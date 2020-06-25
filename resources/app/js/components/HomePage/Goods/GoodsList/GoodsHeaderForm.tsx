import * as React from 'react';
import {reduxForm, InjectedFormProps, Field, submit} from 'redux-form';
import {Dispatch} from 'redux';

import SelectElement from '../../../FormElements/SelectElement';


export type IHeaderFormData = {
	type: string
}

const GoodsHeaderForm: React.FC<InjectedFormProps<IHeaderFormData>> = (props) => (
	<form onSubmit={props.handleSubmit}>
		<Field
			component={SelectElement}
			name="type"
			options = {['All', 'Featured products']}
		/>
	</form>
);

export default reduxForm<IHeaderFormData>({
	form: 'headerForm',
	initialValues: {
		type: 'All'
	},
	onChange(values: IHeaderFormData, dispatch: Dispatch<any>, props){
		dispatch(submit('headerForm'));
	}
})(GoodsHeaderForm);
