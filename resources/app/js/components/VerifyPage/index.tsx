import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../redux/Reducers';
import Paginate from '../Paginate';
import thunkVerify from '../../redux/ThunkActions/thunkVerify';


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
			<Paginate paths={[
				{name: 'Home', path: '/'},
				{name: 'Verify email', path: '/verify'}
			]}/>

			{props.verifyState.isLoading && <div>Loading...</div>}

			<div>
				{
					props.verifyState.message ?
						props.verifyState.message :
						props.verifyState.error
				}
			</div>
		</React.Fragment>
	);
};

export default connected(VerifyPage);
