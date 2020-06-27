import * as React from 'react';
import {WrappedFieldProps, Field} from 'redux-form';

import SizeElement from './SizeElement';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLUListElement> & {
	sizes: Array<string>
};

const SizeGroup: React.FC<IElementProps> = (props) => {
	const {sizes, input: {value, name}} = props;

	return (
		<ul className="goods__size">
			{
				sizes.map((size: string, index: number) => (
					<Field
						component={SizeElement}
						key={index}
						name={name}
						size={size}
						checked={value == size}
					/>
				))
			}
		</ul>
	);
};

export default SizeGroup;
