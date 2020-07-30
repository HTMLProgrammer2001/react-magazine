import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import c from 'classnames';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';


const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps & {checked: boolean }) => ({
	changeValue: (name: string, newValue: string) => {
		let newSize = ownProps.checked ? '' : newValue;
		dispatch(change(ownProps.formName, name, newSize));
	}
});

const connected = connect(null, mapDispatchToProps);

type IOwnProps = {
	size: string,
	viewType?: 'thunks.ts' | 'goods',
	formName: string
}

type IElementProps = WrappedFieldProps & React.InputHTMLAttributes<HTMLLIElement> &
	IOwnProps & ConnectedProps<typeof connected>;

const SizeElement: React.FC<IElementProps> = (props) => {
	const {className, viewType, size, checked, input: {name}} = props;

	const mainClass = viewType == 'thunks.ts' ? 'product__size' : 'goods__size';

	const classes = c(`${mainClass}-item ${className ? className : ''}`, {
		[`${mainClass}-item_active`]: checked
	});

	return (
		<li
			className={classes}
			onClick={() => props.changeValue(name, size)}
		>
			{size}
		</li>
	);
};

export default connected(SizeElement);
