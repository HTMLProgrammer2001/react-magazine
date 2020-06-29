import * as React from 'react';

import ReviewForm, {IReviewFormData} from './ReviewForm';
import ReviewsList from './ReviewsList';


type IReviewsProps = {
	productID: number
}

const Reviews: React.FC<IReviewsProps> = (props) => (
	<div className="reviews my-pad">
		<div className="container">
			<div className="reviews__head">Reviews</div>

			<ReviewForm onSubmit={(vals: IReviewFormData) => console.log(vals)}/>
			<ReviewsList productID={props.productID}/>
		</div>
	</div>
);

export default Reviews;
