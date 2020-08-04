import * as React from 'react';
import {Field} from 'redux-form';

import InputElement from '../../FormElements/InputElement';

import required from '../../../Helpers/Validators/required';
import email from '../../../Helpers/Validators/email';
import fullName from '../../../Helpers/Validators/fullName';


const UserData: React.FC<{}> = () => (
	<React.Fragment>
		<Field
			component={InputElement}
			type="text"
			name="email"
			placeholder="Email"
			required
			validate={[required, email]}
		/>

		<Field
			component={InputElement}
			name="name"
			placeholder="Name"
			required
			validate={[required, fullName]}
		/>
	</React.Fragment>
);

export default UserData;
