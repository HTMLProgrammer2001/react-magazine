import * as React from 'react';
import {Field, formValueSelector} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import CheckboxElement from '../../FormElements/CheckboxElement';
import InputElement from '../../FormElements/InputElement';
import {RootState} from '../../../redux';
import sizeBetween from '../../../Helpers/Validators/sizeBetween';
import required from '../../../Helpers/Validators/required';


export type IAccountFormData = {
	create?: boolean,
	password?: string,
	password_confirmation?: string
}

const selector = formValueSelector('billing');

const connected = connect((state: RootState) => ({
	isCreate: selector(state, 'create')
}));

const between = sizeBetween(8, 20);

const AccountForm: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<React.Fragment>
		<Field component={CheckboxElement}
			   name="create"
			   placeholder="Create account?"
		/>

		{props.isCreate &&
		<div className="row my-pad">
			<Field
				component={InputElement}
				name="password"
				type="password"
				placeholder="Password"
				className="mr-1"
				required
				validate={[required, between]}
			/>

			<Field
				component={InputElement}
				name="password_confirmation"
				type="password"
				placeholder="Password confirmation"
				className="ml-1"
				required
			/>
		</div>
		}
	</React.Fragment>
);

export default connected(AccountForm);
