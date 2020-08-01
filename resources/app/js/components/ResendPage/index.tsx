import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {default as ResendForm, IResendFormData} from './ResendForm';
import IsAuthenticated from '../../HOC/IsAuthenticated';
import thunkResend from '../../redux/resend/thunks';


const mapDispatchToProps = (dispatch: any) => ({
	resend: (vals: IResendFormData) => {
		dispatch(thunkResend(vals, 'resend'));
	}
});

const connected = connect(null, mapDispatchToProps);


type IResendProps = ConnectedProps<typeof connected>;

const ResendPage: React.FC<IResendProps> = (props) => {
	React.useEffect(() => {
		document.title = 'Resend password';
	}, []);

	let onSubmit = (vals: IResendFormData) => {
		props.resend(vals);
	};

	return (
		<React.Fragment>
			<Breadcrumbs paths={[
				{name: 'Home', path: '/'},
				{name: 'Resend', path: '/resend'}
			]}/>

			<ResendForm onSubmit={onSubmit}/>
		</React.Fragment>
	);
};

export default IsAuthenticated(false)<IResendProps>(connected(ResendPage));

