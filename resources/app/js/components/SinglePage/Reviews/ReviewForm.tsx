import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import MarkElement from '../../FormElements/MarkElement';
import {RootState} from '../../../redux/Reducers';
import UserData from './UserData';


export type IReviewFormData = {
	mark: number,
	email: string,
	name: string,
	message: string
};

const mapStateToProps = (state: RootState) => ({
	commentData: state.single.addComment,
	user: state.user.user
});

const connected = connect(mapStateToProps);

type IOwnProps = ConnectedProps<typeof connected>;
type IReviewFormProps = InjectedFormProps<IReviewFormData, IOwnProps> & IOwnProps;

const ReviewForm: React.FC<IReviewFormProps> = (props) => (
	<form className="reviews__form" onSubmit={props.handleSubmit} noValidate>
		{
			props.commentData.error &&
				<div className="red">{props.commentData.error}</div>
		}

		<div className="row">
			<img
				className="reviews__ava"
				src={`/image/${props.user ? props.user.avatar : 'noAva.jpg'}`}
				alt="Ava"
			/>

			<div className="reviews__wrap">
				<Field
					component={MarkElement}
					name="mark"
					formName={props.form}
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
							   name="message"
						/>

						<label className="input__label">Message</label>
						<div className="input__line" style={{bottom: '4px'}}/>
					</div>

					<button type="submit" className="reviews__but">Send</button>
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
