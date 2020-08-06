import * as React from 'react';
import {reduxForm, InjectedFormProps, Field, submit} from 'redux-form';
import InputElement from '../../FormElements/InputElement';
import SelectElement from '../../FormElements/SelectElement';
import {Dispatch} from 'redux';

export type IReviewsFormData = {
	find: string,
	sort: string
};

type IReviewsFormProps = InjectedFormProps<IReviewsFormData>;

const ReviewsForm: React.FC<IReviewsFormProps> = (props) => (
	<form className="myOrders__header my-pad" onSubmit={props.handleSubmit}>
		<span className="myOrders__find">
			<Field
				component={InputElement}
				name="find"
				placeholder="Find review"
				required
			/>
		</span>

		<Field
			component={SelectElement}
			name="sort"
			options={['Latest', 'Newest', 'Positive first', 'Negative first']}
		/>
	</form>
);

export default reduxForm<IReviewsFormData>({
	form: 'reviewsFind',
	initialValues: {
		find: '',
		sort: 'Latest'
	},
	onChange(values: Partial<IReviewsFormData>, dispatch: Dispatch<any>): void {
		dispatch(submit('reviewsFind'));
	}
})(ReviewsForm);
