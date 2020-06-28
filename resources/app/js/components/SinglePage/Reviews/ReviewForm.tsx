import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import InputElement from '../../FormElements/InputElement';


const ReviewForm: React.FC<InjectedFormProps<{}>> = (props) => (
	<form className="reviews__form" onSubmit={props.handleSubmit}>
		<div className="row">
			<img className="reviews__ava" src="/image/ava.png" alt="Ava"/>

			<div className="reviews__wrap">
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
						<textarea className="input__elem" required rows={1} id="message"/>
						<label className="input__label">Message</label>
						<div className="input__line" style={{bottom: '7px'}}/>
					</div>

					<button type="submit" className="reviews__but">Send</button>
				</div>
			</div>
		</div>
	</form>
);

export default reduxForm({
	form: 'productReview'
})(ReviewForm);
