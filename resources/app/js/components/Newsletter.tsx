import * as React from 'react';


const Newsletter: React.FC<{}> = () => (
	<div className="subscribe">
		<div className="container">
			<div className="subscribe__wrap">
				<div className="subscribe__content">
					<div className="subscribe__head">Newsletter</div>

					<div className="subscribe__desc">
						Get timely updates from your favorite products
					</div>

					<div className="subscribe__form">
						<div className="subscribe__form-wrap">
							<i className="fas fa-envelope subscribe__icon"/>
							<input className="subscribe__email" placeholder="Enter your email"/>
						</div>

						<div className="subscribe__but">
							<i className="fas fa-paper-plane"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Newsletter;
