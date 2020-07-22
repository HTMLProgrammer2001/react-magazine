import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../../../FormElements/InputElement';


export type ISearchFormData = {
	search: string
}

type ISearchFormProps = InjectedFormProps<ISearchFormData>

const SearchForm: React.FC<ISearchFormProps> = (props) => (
	<form onSubmit={props.handleSubmit} noValidate>
		<Field
			component={InputElement}
			name="search"
			type="text"
			placeholder="Search"
			required
		/>
	</form>
);

export default reduxForm<ISearchFormData>({
	form: 'search'
})(SearchForm);
