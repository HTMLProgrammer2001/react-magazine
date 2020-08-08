import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import PersonalInfoForm, {PersonalInfoFormData} from './PersonalInfoForm';
import ChangePasswordForm, {IChangePasswordData} from './ChangePasswordForm';
import thunkProfilePasswordChange from '../../../redux/Profile/changePassword/thunks';
import thunkDelete from '../../../redux/Profile/deleteAccount/thunks';
import {RootState} from '../../../redux';
import {selectDeleteState} from '../../../redux/Profile/deleteAccount/selectors';
import thunkProfilePersonal from '../../../redux/Profile/personal/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectDeleteState(state)
});

const connected = connect(mapStateToProps, {
	changePassword: thunkProfilePasswordChange,
	deleteAcc: thunkDelete,
	personalChange: thunkProfilePersonal
});

type ISettingsPageProps = ConnectedProps<typeof connected>;

const SettingsPage: React.FC<ISettingsPageProps> = (props) => (
	<div className="admContent">
		<div className="billing py-pad">
			<div className="container">
				<div className="login__head">Personal info</div>

				<PersonalInfoForm
					onSubmit={(vals: PersonalInfoFormData) => {
						console.log(vals);
						props.personalChange(vals, 'profilePersonalForm');
					}}
				/>

				<ChangePasswordForm onSubmit={(vals: IChangePasswordData) => {
					console.log(vals);
					props.changePassword(vals, 'profileChangePassword');
				}}/>

				<div className="login__head">Delete account</div>
				<div className="row space-between my-pad w-100">
					<div/>
					<button
						type="button"
						onClick={() => {
							if(confirm('Are you sure?'))
								props.deleteAcc();
						}}
						className="check__but"
					>{props.isLoading ? 'Loading...' : 'Delete'}</button>
				</div>
			</div>
		</div>
	</div>
);

export default connected(SettingsPage);
