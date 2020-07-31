import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router';

import Breadcrumbs from '../Breadcrumbs';
import {default as ChangeForm, IChangeFormData} from './ChangeForm';
import {RootState} from '../../redux';
import thunkChange from '../../redux/change/thunks';
import {selectChangeState} from '../../redux/change/selectors';


const mapStateToProps = (state: RootState) => ({
	changeFormState: selectChangeState(state)
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
			<Breadcrumbs paths={
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

