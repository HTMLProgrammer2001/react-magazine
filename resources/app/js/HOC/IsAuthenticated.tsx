import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router';

import {RootState} from '../redux';


const IsAuthenticated = (isAuth: boolean = true) =>
	<T extends object>(Elem: React.ComponentType<T>) => {
		const mapStateToProps = (state: RootState) => ({
			initialized: state.app.initialized,
			userData: state.user
		});

		const connected = connect(mapStateToProps, null);

		type AuthProps = T & ConnectedProps<typeof connected>;
		const AuthenticatedElement: React.FC<AuthProps> = (props: any) => {
			if (!props.initialized)
				return <div>Loading...</div>;

			if (!props.userData.user && isAuth)
				return <Redirect to='/login'/>;
			else if(props.userData.user && !isAuth)
				return <Redirect to='/profile'/>;

			return <Elem {...(props as T)}/>;
		};

		return connected<any>(AuthenticatedElement);
	};

export default IsAuthenticated;
