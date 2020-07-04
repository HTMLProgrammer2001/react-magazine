import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import c from 'classnames';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';


const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps) => ({
	changeValue: (name: string, newValue: string) => {
		dispatch(change(ownProps.formName, name, newValue));
	}
});

const connected = connect(null, mapDispatchToProps);

type IOwnProps = {
	color: string,
	formName: string
};

type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement> & IOwnProps
	& ConnectedProps<typeof connected>;

const ColorElement: React.FC<IElementProps> = (props) => {
	const {className, color, checked, input: {name}} = props;

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

					props.changeValue(name, newColor);
				}
			}
		/>
	);
};

export default connected(ColorElement);
