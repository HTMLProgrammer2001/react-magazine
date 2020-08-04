import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';
import {selectUser} from '../../../redux/AppState/user/selectors';


const mapStateToProps = (state: RootState) => ({
	user: selectUser(state)
});

const connected = connect(mapStateToProps);

const ProfileInfo: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="info py-pad">
		<div className="container">

			<div className="info__links">
				<Link to='/'>
					<button type="button" className="info__home but but_outline">
						Continue shop
					</button>
				</Link>


				<Link to='/profile/settings'>
					<button type="button" className="info__settings but but_outline">
						Settings
					</button>
				</Link>
			</div>

			<div className="info__image my-pad">
				<img className="info__photo" src={`/image/${props.user!.avatar}`}/>
			</div>

			<div className="info__fields">
				<div className="info__field">Name: {props.user!.fullName}</div>
				<div className="info__field">Email: {props.user!.email}</div>
			</div>

			<hr/>
		</div>
	</div>
);

export default connected(ProfileInfo);
