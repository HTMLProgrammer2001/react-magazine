import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import Mark from '../Mark';


const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps) => ({
	changeValue: (name: string, newValue: number) => {
		dispatch(change(ownProps.formName, name, newValue));
	}
});

const connected = connect(null, mapDispatchToProps);

type IOwnProps = {
	formName: string
}

type IElementProps = WrappedFieldProps & React.HTMLAttributes<HTMLDivElement>
	& ConnectedProps<typeof connected> & IOwnProps;

const MarkElement: React.FC<IElementProps> = (props) => {
	const {input: {value, name}} = props;

	return (
		<React.Fragment>
			<Mark
				rating={value}
				fixed={false}
				onChange={(newValue: number) => props.changeValue(name, newValue)}
			/>

			<div className="red">{props.meta.error}</div>
		</React.Fragment>
	);
};

export default connected(MarkElement);
