import * as React from 'react';

import ReviewForm, {IReviewFormData} from './ReviewForm';
import ReviewsList from './ReviewsList';


const Reviews: React.FC<{}> = () => (
	<div className="reviews my-pad">
		<div className="container">
			<div className="reviews__head">Reviews</div>

			<ReviewForm onSubmit={(vals: IReviewFormData) => console.log(vals)}/>
			<ReviewsList/>
		</div>
	</div>
);

export default Reviews;
