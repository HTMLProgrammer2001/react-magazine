import * as React from 'react';

import ReviewForm from './ReviewForm';


const Reviews: React.FC<{}> = () => (
	<div className="reviews my-pad">
		<div className="container">
			<div className="reviews__head">Reviews</div>

			<ReviewForm/>
		</div>
	</div>
);

export default Reviews;
