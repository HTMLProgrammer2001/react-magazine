import * as React from 'react';
import {WrappedFieldProps, Field} from 'redux-form';

import RadioElement from './RadioElement';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement> & {
	options: Array<{text: string, value: any}>,
	formName: string
};

const RadioGroup: React.FC<IElementProps> = (props) => {
	const {options, formName, input: {value, name}} = props;

	return (
		<React.Fragment>
			{
				options.map((option, index: number) => (
					<Field
						component={RadioElement}
						placeholder={option.text}
						key={index}
						formName={formName}
						name={name}
						value={option.value}
					/>
				))
			}
		</React.Fragment>
	);
};

export default RadioGroup;
