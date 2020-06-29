import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import Mark from '../Mark';


const connected = connect();

type IElementProps = WrappedFieldProps & React.HTMLAttributes<HTMLDivElement>
	& ConnectedProps<typeof connected> & {
	formName: string
};

const MarkElement: React.FC<IElementProps> = (props) => {
	const {formName, dispatch, input: {value, name}} = props;

	const changeValue = (newValue: number) => {
		console.log(newValue);
		dispatch(change(formName, name, newValue));
	};

	return (
		<Mark
			rating={value}
			fixed={false}
			onChange={changeValue}
		/>
	);
};

export default connected(MarkElement);
