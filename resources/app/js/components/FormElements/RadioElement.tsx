import * as React from 'react';
import {change, WrappedFieldProps} from 'redux-form';
import c from 'classnames';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const RadioElement: React.FC<IElementProps> = (props) => {
	const {placeholder, className, style, value: radioValue,
		input: {value, name, checked, onChange}} = props;

	return (
		<div className="radio" style={style}>
			<label className="row">
				<input
					className={c('radio__elem', className)}
					type="radio"
					value={radioValue}
					name={name}
					onChange={onChange}
					checked={value == radioValue}
				/>

				<span className="radio__label">{placeholder}</span>
			</label>
		</div>
	);
};

export default RadioElement;
