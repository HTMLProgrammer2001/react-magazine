import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import ReviewForm, {IReviewFormData} from './ReviewForm';
import ReviewsList from './ReviewsList';
import {RootState} from '../../../redux';
import thunkAddComment from '../../../redux/SingleState/addComment/thunks';
import {selectSingleID} from '../../../redux/SingleState/selectors';


const mapStateToProps = (state: RootState) => ({
	productID: selectSingleID(state)
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
