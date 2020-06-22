import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const InputElement: React.FC<IElementProps> = (props) => {
	const {required, type, placeholder, className, input: {value, name, onChange}} = props;

	return (
		<div className={`input  ${className}`}>
			<input
				className="input__elem"
				required={required}
				type={type}
				value={value}
				name={name}
				onChange={onChange}/>

			<label className="input__label">
				<span>{placeholder}</span>
				{required && <span className="red">*</span>}
			</label>

			<div className="input__line"/>
		</div>
	);
};

export default InputElement;
