import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router';

import {RootState} from '../redux';


const IsAuthenticated = <T extends object>(Elem: React.ComponentType<T>) => {
	const mapStateToProps = (state: RootState) => ({
		initialized: state.app.initialized,
		userData: state.user
	});

	const connected = connect(mapStateToProps, null);

	const AuthenticatedElement: React.FC<T & ConnectedProps<typeof connected>> = (props: any) => {
		if(!props.initialized)
			return <div>Loading...</div>;

		if(!props.userData.user)
			return <Redirect to='/login'/>;

		return <Elem {...(props as T)}/>;
	};

	return connected<any>(AuthenticatedElement);
};

export default IsAuthenticated;

