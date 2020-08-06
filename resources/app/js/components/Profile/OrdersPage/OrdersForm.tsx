import * as React from 'react';
import {reduxForm, Field, InjectedFormProps, submit} from 'redux-form';
import {Dispatch} from 'redux';

import InputElement from '../../FormElements/InputElement';
import SelectElement from '../../FormElements/SelectElement';
import RadioGroup from '../../FormElements/RadioGroup';


export type IOrdersFormData = {
	find: string,
	sort: 'Latest' | 'Newest',
	types: string
};

type IOrdersFormProps = InjectedFormProps<IOrdersFormData>

const OrdersForm: React.FC<IOrdersFormProps> = (props) => (
	<form onSubmit={props.handleSubmit}>
		<div className="myOrders__header my-pad">
			<span className="myOrders__find">
				<Field
					component={InputElement}
					type="text"
					name="find"
					placeholder="Enter order items name"
					required
				/>
			</span>
		</div>

		<Field
			component={SelectElement}
			name="sort"
			options={['Latest', 'Newest']}
		/>

		<div className="myOrders__types my-pad">
			<Field
				component={RadioGroup}
				formName={props.form}
				name="types"
				options={[
					{text: 'All', value: 'all'},
					{text: 'Finished', value: 'finished'},
					{text: 'In move', value: 'move'},
					{text: 'Payment', value: 'payment'}
				]}
			/>
		</div>
	</form>
);

export default reduxForm<IOrdersFormData>({
	form: 'ordersFind',
	initialValues: {
		find: '',
		sort: 'Latest',
		types: 'all'
	},
	onChange(values: Partial<IOrdersFormData>, dispatch: Dispatch<any>): void {
		dispatch(submit('ordersFind'));
	}
})(OrdersForm);

