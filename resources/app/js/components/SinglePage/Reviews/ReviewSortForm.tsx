import * as React from 'react';
import {reduxForm, InjectedFormProps, Field, submit} from 'redux-form';
import {Dispatch} from 'redux';

import SelectElement from '../../FormElements/SelectElement';


export type IReviewSortFormData = {
	type: string
}

const GoodsHeaderForm: React.FC<InjectedFormProps<IReviewSortFormData>> = (props) => (
	<form onSubmit={props.handleSubmit}>
		<Field
			component={SelectElement}
			name="type"
			options = {['New first', 'Old first', 'Best first', 'Worse first']}
		/>
	</form>
);

export default reduxForm<IReviewSortFormData>({
	form: 'sortReviewsForm',
	initialValues: {
		type: 'New first'
	},
	onChange(values: IReviewSortFormData, dispatch: Dispatch<any>){
		dispatch(submit('sortReviewsForm'));
	}
})(GoodsHeaderForm);
