import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import MarkElement from '../../FormElements/Custom/MarkElement';
import UserData from './UserData';
import {RootState} from '../../../redux';
import required from '../../../Helpers/Validators/required';
import inRange from '../../../Helpers/Validators/inRange';
import {selectUser} from '../../../redux/AppState/user/selectors';


export type IReviewFormData = {
	mark: number,
	email: string,
	name: string,
	message: string
};

const mapStateToProps = (state: RootState) => ({
	user: selectUser(state)
});

const connected = connect(mapStateToProps);

type IOwnProps = ConnectedProps<typeof connected>;
type IReviewFormProps = InjectedFormProps<IReviewFormData, IOwnProps> & IOwnProps;

const markValidator = inRange(1, 5);

const ReviewForm: React.FC<IReviewFormProps> = (props) => (
	<form className="reviews__form" onSubmit={props.handleSubmit}>
		{
			props.error &&
				<div className="red">{props.error}</div>
		}

		<div className="row">
			<img
				className="reviews__ava"
				src={props.user ? props.user.avatar : '/storage/avatars/noAva.jpg'}
				alt="Ava"
			/>

			<div className="reviews__wrap">
				<Field
					component={MarkElement}
					name="mark"
					formName={props.form}
					validate={[markValidator]}
				/>

				<div className="reviews__comment">
					{
						props.user ?
							<div>{props.user.fullName}</div>
							:
							<UserData/>
					}

					<div className="input">
						<Field component="textarea"
							   className="input__elem"
							   rows={1}
							   required
							   validate={[required]}
							   name="message"
						/>

						<label className="input__label">Message</label>
						<div className="input__line" style={{bottom: '4px'}}/>
					</div>

					<button type="submit" className="reviews__but">
						{props.submitting ? 'Loading...' : 'Send'}
					</button>
				</div>
			</div>
		</div>
	</form>
);

const ReviewFormRedux = reduxForm<IReviewFormData, IOwnProps>({
	form: 'productReview',
	initialValues: {
		mark: 0,
		email: '',
		name: '',
		message: ''
	}
})(ReviewForm);

export default connected(ReviewFormRedux);
