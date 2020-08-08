import * as React from 'react';
import {InjectedFormProps, Field, reduxForm} from 'redux-form';

import InputElement from '../../FormElements/InputElement';
import required from '../../../Helpers/Validators/required';
import fullName from '../../../Helpers/Validators/fullName';
import email from '../../../Helpers/Validators/email';
import FileElement from '../../FormElements/FileElement';


export type PersonalInfoFormData = {
	avatar: File,
	fullName: string,
	email: string
};

type IPersonalInfoFormProps = InjectedFormProps<PersonalInfoFormData>;

const PersonalInfoForm: React.FC<IPersonalInfoFormProps> = (props) => {
	const [url, changeURL] = React.useState<string>('/image/product.png');

	const onChange = (file: any) => {
		changeURL(URL.createObjectURL(file));
		props.change('avatar', file);
	};

	return (
		<form className="billing__form" onSubmit={props.handleSubmit}>
			{props.error && <div className="red">{props.error}</div>}

			<div className="file my-pad">
				<img className="file_image" src={url}/>

				<label>
					<Field
						component={FileElement}
						name="avatar"
						onChange={onChange}
					/>

					<div className="file__but">Select file</div>
				</label>
			</div>


			<Field
				component={InputElement}
				name="fullName"
				placeholder="Full name"
				required
				validate={[required, fullName]}
			/>

			<Field
				component={InputElement}
				name="email"
				placeholder="Email"
				required
				validate={[required, email]}
			/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.submitting ? 'Loading...' : 'Update'}
				</button>
			</div>
		</form>
	);
};

export default reduxForm<PersonalInfoFormData>({
	form: 'profilePersonalForm'
})(PersonalInfoForm);
