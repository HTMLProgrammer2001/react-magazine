import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import c from 'classnames';
import {connect, ConnectedProps} from 'react-redux';


const connected = connect();

type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement> & {
	color: string
} & ConnectedProps<typeof connected>;

const ColorElement: React.FC<IElementProps> = (props) => {
	const {className, dispatch, color, checked, input: {name}} = props;

	const classes = c(`goods__color-item ${className ? className : ''}`, {
		'goods__color-item_active': checked
	});

	return (
		<div
			className={classes}
			style={{background: color}}
			onClick={
				() => {
					let newColor = checked ? '' : color;

					dispatch(change('productFilter', name, newColor));
				}
			}
		/>
	);
};

export default connected(ColorElement);
