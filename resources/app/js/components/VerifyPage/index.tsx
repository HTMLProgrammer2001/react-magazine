import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {RootState} from '../../redux';
import thunkVerify from '../../redux/verify/thunks';
import IsAuthenticated from '../../HOC/IsAuthenticated';
import NotFoundImg from '../NotFoundPage/NotFoundImg';


const mapStateToProps = (state: RootState) => ({
	verifyState: state.verify
});

const mapDispatchToProps = (dispatch: any) => ({
	verify: (id: string) => {
		dispatch(thunkVerify(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);


type IRouteParams = {
	id: string
}

type IVerifyPageProps = RouteComponentProps<IRouteParams> & ConnectedProps<typeof connected>;

const VerifyPage: React.FC<IVerifyPageProps> = (props) => {
	React.useEffect(() => {
		props.verify(props.match.params.id);
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs paths={[
				{name: 'Home', path: '/'},
				{name: 'Verify email', path: '/verify'}
			]}/>

			{props.verifyState.isLoading && <div>Loading...</div>}
			{props.verifyState.notFound && <NotFoundImg/>}

			<div className="verify__text">
				{
					props.verifyState.message ?
						props.verifyState.message :
						props.verifyState.error
				}
			</div>
		</React.Fragment>
	);
};

export default IsAuthenticated(false)<IVerifyPageProps>(connected(VerifyPage));
