import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';


const connected = connect();

type IElementProps = WrappedFieldProps & React.HTMLAttributes<HTMLDivElement>
		& ConnectedProps<typeof connected> & {
	formName: string
};

const NumericElement: React.FC<IElementProps> = (props) => {
	const {className, formName, dispatch, input: {value, name}} = props;

	const changeValue = (newValue: number) => {
		if(newValue <= 0) {
			return;
		}

		dispatch(change(formName, name, newValue));
	};

	return (
		<span className={`order__quantity-count ${className}`}>
			<span
				className="order__quantity-control"
				onClick={() => changeValue(value - 1)}
			>-</span>

			<span className="order__quantity-elem">{value}</span>

			<span className="order__quantity-control"
				  onClick={() => changeValue(value + 1)}
			>+</span>
		</span>
	);
};

export default connected(NumericElement);
