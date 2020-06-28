import * as React from 'react';
import {WrappedFieldProps, Field} from 'redux-form';

import CheckboxElement from './CheckboxElement';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement> & {
	options: Array<string>,
	formName: string
};

const CheckboxGroup: React.FC<IElementProps> = (props) => {
	const {options, formName, input: {value, name}} = props;

	return (
		<React.Fragment>
			{
				options.map((option: string, index: number) => (
					<Field
						component={CheckboxElement}
						placeholder={option}
						key={index}
						formName={formName}
						style={{margin: '5px 0'}}
						name={`${name}[${option}]`}
						checked={!!value[option]}
					/>
				))
			}
		</React.Fragment>
	);
};

export default CheckboxGroup;
