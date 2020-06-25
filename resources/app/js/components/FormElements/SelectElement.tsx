import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';


type IElementProps = WrappedFieldProps & React.SelectHTMLAttributes<HTMLSelectElement> & {
	options: Array<string>
};

const SelectElement: React.FC<IElementProps> = (props) => {
	const {className, options, input: {value, name, onChange}} = props;

	return (
		<div className="select cur">
			<select
				className={`select__input cur ${className}`}
				name={name}
				value={value}
				onChange={onChange}
			>
				{
					options.map( (option: string, index: number) => (
						<option
							key={index}
							value={option}
						>
							{option}
						</option>
					))
				}
			</select>
			<i className="fas fa-chevron-down select__icon"/>
			<div className="select__line"/>
		</div>
	);
};

export default SelectElement;
