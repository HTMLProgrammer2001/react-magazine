import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';


const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps) => ({
	changeValue: (name: string, newValue: number) => {
		if(newValue <= 0) {
			return;
		}

		dispatch(change(ownProps.formName, name, newValue));
	}
});

const connected = connect(null, mapDispatchToProps);

type IOwnProps = {
	formName: string
}

type IElementProps = WrappedFieldProps & React.HTMLAttributes<HTMLDivElement>
		& ConnectedProps<typeof connected> & IOwnProps;

const NumericElement: React.FC<IElementProps> = (props) => {
	const {className, input: {value, name}} = props;

	return (
		<span className={`order__quantity-count ${className}`}>
			<span
				className="order__quantity-control"
				onClick={() => props.changeValue(name, value - 1)}
			>-</span>

			<span className="order__quantity-elem">{value}</span>

			<span className="order__quantity-control"
				  onClick={() => props.changeValue(name, value + 1)}
			>+</span>
		</span>
	);
};

export default connected(NumericElement);
