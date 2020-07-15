import * as React from 'react';
import {WrappedFieldProps, Field} from 'redux-form';

import CheckboxElement from './CheckboxElement';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement> & {
	options: Array<{text: string, value: any}>,
	formName: string
};

const CheckboxGroup: React.FC<IElementProps> = (props) => {
	const {options, formName, input: {value, name}} = props;

	return (
		<React.Fragment>
			{
				options.map((option, index: number) => (
					<Field
						component={CheckboxElement}
						placeholder={option.text}
						key={index}
						formName={formName}
						style={{margin: '5px 0'}}
						name={`${name}[${option.value}]`}
						checked={!!value[option.value]}
					/>
				))
			}
		</React.Fragment>
	);
};

export default CheckboxGroup;
