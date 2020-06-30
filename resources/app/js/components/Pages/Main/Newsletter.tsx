import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';


const Newsletter: React.FC<InjectedFormProps<{}>> = (props) => (
	<div className="subscribe">
		<div className="container">
			<div className="subscribe__wrap">
				<div className="subscribe__content">
					<div className="subscribe__head">Newsletter</div>

					<div className="subscribe__desc">
						Get timely updates from your favorite products
					</div>

					<form className="subscribe__form" onSubmit={props.handleSubmit}>
						<div className="subscribe__form-wrap">
							<i className="fas fa-envelope subscribe__icon"/>

							<Field
								component="input"
								name="email"
								className="subscribe__email"
								placeholder="Enter your email"
							/>
						</div>

						<button type="submit" className="subscribe__but">
							<i className="fas fa-paper-plane"/>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
);

export default reduxForm({
	form: 'newsletter'
})(Newsletter);
