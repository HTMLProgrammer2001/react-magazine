import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import ReviewForm, {IReviewFormData} from './ReviewForm';
import ReviewsList from './ReviewsList';
import {RootState} from '../../../redux/Reducers';
import thunkAddComment from '../../../redux/ThunkActions/Single/thunkAddComment';


const mapStateToProps = (state: RootState) => ({
	productID: state.single.thunks.data!.id
});

const connected = connect(mapStateToProps, {
	addComment: thunkAddComment
});

const Reviews: React.FC<ConnectedProps<typeof connected>> = (props) => {
	const onSubmit = (vals: IReviewFormData) => {
		console.log(vals);
		props.addComment(props.productID, vals, 'productReview');
	};

	return (
		<div className="reviews my-pad">
			<div className="container">
				<div className="reviews__head">Reviews</div>

				<ReviewForm onSubmit={onSubmit}/>

				<ReviewsList/>
			</div>
		</div>
	);
};

export default connected(Reviews);
