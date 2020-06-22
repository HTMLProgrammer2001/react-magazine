import * as React from 'react';
import {Field, formValueSelector} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux/Reducers';
import CheckboxElement from '../../FormElements/CheckboxElement';
import InputElement from '../../FormElements/InputElement';


const selector = formValueSelector('billing');

const connected = connect((state: RootState) => ({
	isCreate: selector(state, 'create')
}));

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
				placeholder="Password"
				className="mr-1"
				required
			/>

			<Field
				component={InputElement}
				name="password_confirm"
				placeholder="Password confirmation"
				className="ml-1"
				required
			/>
		</div>
		}
	</React.Fragment>
);

export default connected(AccountForm);
