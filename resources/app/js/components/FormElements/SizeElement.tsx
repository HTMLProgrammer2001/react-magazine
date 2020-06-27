import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import c from 'classnames';
import {connect, ConnectedProps} from 'react-redux';


const connected = connect();

type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLLIElement> & {
	size: string
} & ConnectedProps<typeof connected>;

const SizeElement: React.FC<IElementProps> = (props) => {
	const {className, dispatch, size, checked, input: {name}} = props;

	const classes = c(`goods__size-item ${className ? className : ''}`, {
		'goods__size-item_active': checked
	});

	return (
		<li
			className={classes}
			onClick={
				() => {
					let newSize = checked ? '' : size;

					dispatch(change('productFilter', name, newSize));
				}
			}
		>
			{size}
		</li>
	);
};

export default connected(SizeElement);
