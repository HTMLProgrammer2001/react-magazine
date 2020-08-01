import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../../../FormElements/InputElement';
import required from '../../../../Helpers/Validators/required';


export type ISearchFormData = {
	search: string
}

type ISearchFormProps = InjectedFormProps<ISearchFormData>

const SearchForm: React.FC<ISearchFormProps> = (props) => (
	<form onSubmit={props.handleSubmit}>
		<Field
			component={InputElement}
			name="search"
			type="text"
			placeholder="Search"
			required
			validate={[required]}
		/>
	</form>
);

export default reduxForm<ISearchFormData>({
	form: 'search'
})(SearchForm);
