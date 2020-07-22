import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {compose} from 'redux';
import {withRouter, RouteComponentProps} from 'react-router';

import Paginate from '../Paginate';
import {default as ChangeForm, IChangeFormData} from './ChangeForm';
import {RootState} from '../../redux/Reducers';
import thunkChange from '../../redux/ThunkActions/thunkChange';


const mapStateToProps = (state: RootState) => ({
	changeFormState: state.change
});

const connected = connect(mapStateToProps, {
	changePassword: thunkChange
});

type IRouteParams = {
	id: string
}

type IChangePasswordProps = ConnectedProps<typeof connected> & RouteComponentProps<IRouteParams>;


const ChangePage: React.FC<IChangePasswordProps> = (props) => {
	const submit = (values: IChangeFormData) => {
		console.log(values);
		props.changePassword(props.match.params.id, values, 'change');
	};

	React.useEffect(() => {
		document.title = 'Change password';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={
				[{name: 'Home', path: '/'}, {name: 'Change password', path: '/change'}]
			}/>

			<ChangeForm
				onSubmit={submit}
				changeData={props.changeFormState}
			/>
		</React.Fragment>
	);
};

export default connected(withRouter(ChangePage));

