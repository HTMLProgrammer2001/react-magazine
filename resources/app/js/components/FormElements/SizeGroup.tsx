import * as React from 'react';
import {WrappedFieldProps, Field} from 'redux-form';

import SizeElement from './SizeElement';


type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLUListElement> & {
	sizes: Array<string>,
	formName: string,
	viewType?: 'thunks.ts' | 'goods'
};

const SizeGroup: React.FC<IElementProps> = (props) => {
	const {sizes, formName, viewType, input: {value, name}} = props;

	const mainClass = viewType == 'thunks.ts' ? 'product__size' : 'goods__size';

	return (
		<ul className={`${mainClass} ${mainClass}-list`}>
			{
				sizes.map((size: string, index: number) => (
					<Field
						component={SizeElement}
						key={index}
						name={name}
						size={size}
						formName={formName}
						viewType={viewType}
						checked={value == size}
					/>
				))
			}
		</ul>
	);
};

export default SizeGroup;
