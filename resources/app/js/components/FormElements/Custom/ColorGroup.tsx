import * as React from 'react';
import {WrappedFieldProps, Field} from 'redux-form';

import ColorElement from './ColorElement';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement> & {
	colors: Array<string>,
	formName: string
};

const ColorGroup: React.FC<IElementProps> = (props) => {
	const {colors, formName, input: {value, name}} = props;

	return (
		<React.Fragment>
			{
				colors.map((color: string, index: number) => (
					<Field
						component={ColorElement}
						key={index}
						name={name}
						formName={formName}
						color={color}
						checked={value == color}
					/>
				))
			}
		</React.Fragment>
	);
};

export default ColorGroup;
