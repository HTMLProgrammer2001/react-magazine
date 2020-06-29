import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import InputElement from '../../FormElements/InputElement';
import MarkElement from '../../FormElements/MarkElement';


export type IReviewFormData = {
	mark: number,
	email: string,
	name: string,
	message: string
};

const ReviewForm: React.FC<InjectedFormProps<IReviewFormData>> = (props) => (
	<form className="reviews__form" onSubmit={props.handleSubmit} noValidate>
		<div className="row">
			<img className="reviews__ava" src="/image/ava.png" alt="Ava"/>

			<div className="reviews__wrap">
				<Field
					component={MarkElement}
					name="mark"
					formName={props.form}
				/>

				<div className="reviews__comment">
					<Field
						component={InputElement}
						name="email"
						placeholder="Email"
						required
					/>

					<Field
						component={InputElement}
						name="userName"
						placeholder="Name"
						required
					/>

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

export default reduxForm<IReviewFormData>({
	form: 'productReview',
	initialValues: {
		mark: 0,
		email: '',
		name: '',
		message: ''
	}
})(ReviewForm);
