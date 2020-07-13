import * as React from 'react';
import {Field} from 'redux-form';

import InputElement from '../../FormElements/InputElement';


const UserData: React.FC<{}> = () => (
	<React.Fragment>
		<Field
			component={InputElement}
			name="email"
			placeholder="Email"
			required
		/>

		<Field
			component={InputElement}
			name="name"
			placeholder="Name"
			required
		/>
	</React.Fragment>
);

export default UserData;
