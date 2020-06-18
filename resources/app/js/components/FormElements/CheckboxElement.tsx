import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxElement: React.FC<IElementProps> = (props) => {
	const {placeholder, className, input: {value, name, onChange}} = props;

	return (
		<div className="checkbox">
			<input className={`checkbox__elem  ${className}`}
				   type="checkbox"
				   checked={value}
				   name={name}
				   onChange={onChange}/>

			<label className="checkbox__label">
				<span>{placeholder}</span>
			</label>
		</div>
	);
};

export default CheckboxElement;
