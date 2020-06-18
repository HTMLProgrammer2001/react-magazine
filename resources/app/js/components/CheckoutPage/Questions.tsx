import * as React from 'react';
import {Link} from 'react-router-dom';


const Questions: React.FC<{}> = () => (
	<div className="container">
		<div className="questions my-pad">
			<div className="question">
				<div className="question__text">
					Returning customer ?

					<Link to="/login">
						Click here to login.
					</Link>
				</div>
			</div>

			<div className="question">
				<div className="question__text">
					Have a coupon ?
					<a href="#">
						Click here to enter.
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Questions;
