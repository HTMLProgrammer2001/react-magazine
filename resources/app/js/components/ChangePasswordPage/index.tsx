import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router';

import Breadcrumbs from '../Breadcrumbs';
import {default as ChangeForm, IChangeFormData} from './ChangeForm';
import {RootState} from '../../redux';
import thunkChange from '../../redux/change/thunks/change';
import {selectChangeState} from '../../redux/change/selectors';
import thunkValid from '../../redux/change/thunks/valid';
import IsAuthenticated from '../../HOC/IsAuthenticated';


const mapStateToProps = (state: RootState) => ({
	changeFormState: selectChangeState(state)
});

const connected = connect(mapStateToProps, {
	changePassword: thunkChange,
	valid: thunkValid
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
		props.valid(props.match.params.id);
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs paths={
				[{name: 'Home', path: '/'}, {name: 'Change password', path: '/change'}]
			}/>

			{
				props.changeFormState.error &&
					<div className="red">{props.changeFormState.error}</div>
			}

			{
				props.changeFormState.isLoading &&
					<div>Loading...</div>
			}

			{
				!props.changeFormState.isLoading && !props.changeFormState.error &&
					<ChangeForm onSubmit={submit}/>
			}
		</React.Fragment>
	);
};

export default withRouter(IsAuthenticated(false)<IChangePasswordProps>(connected(ChangePage)));
