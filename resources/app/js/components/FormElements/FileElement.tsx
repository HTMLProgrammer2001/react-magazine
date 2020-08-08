import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const FileElement: React.FC<IElementProps> = (props) => {
	const {input: {name, onChange}} = props;

	const myChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.files![0]);
	};

	return (
		<input
			className="file__elem"
			type="file"
			name={name}
			onChange={myChange}
		/>
	);
};

export default FileElement;
