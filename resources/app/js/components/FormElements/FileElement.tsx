import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';


type IFileElementProps = {
	defaultPhoto?: string
};

type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement> &
	IFileElementProps;

const FileElement: React.FC<IElementProps> = (props) => {
	const {
		required, defaultPhoto,
		input: {value, name, onChange},
		meta: {touched, error}
	} = props;

	return (
		<div className="file my-pad">
			{
				!value && defaultPhoto &&
					<img className="file_image" src={defaultPhoto} alt="Photo"/>
			}

			<label>
				<input
					className="file__elem"
					type="file"
					name={name}
					onChange={onChange}
					required={required}
				/>

				<div className="file__but">Select file</div>
			</label>

			{touched && error && <div className="red">{error}</div>}
		</div>
	);
};

export default FileElement;
