import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import c from 'classnames';
import {connect, ConnectedProps} from 'react-redux';


const connected = connect();

type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLLIElement> & {
	size: string,
	viewType?: 'product' | 'goods',
	formName: string
} & ConnectedProps<typeof connected>;

const SizeElement: React.FC<IElementProps> = (props) => {
	const {className, formName, dispatch, viewType, size, checked, input: {name}} = props;

	const mainClass = viewType == 'product' ? 'product__size' : 'goods__size';

	const classes = c(`${mainClass}-item ${className ? className : ''}`, {
		[`${mainClass}-item_active`]: checked
	});

	return (
		<li
			className={classes}
			onClick={
				() => {
					let newSize = checked ? '' : size;

					dispatch(change(formName, name, newSize));
				}
			}
		>
			{size}
		</li>
	);
};

export default connected(SizeElement);
