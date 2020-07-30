import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Review from './Review';
import ReviewSortForm, {IReviewSortFormData} from './ReviewSortForm';
import {RootState} from '../../../redux/Reducers';
import thunkComment from '../../../redux/ThunkActions/Single/thunkComment';
import {commentReset} from '../../../redux/Actions/Single/commentsActions';


const mapStateToProps = (state: RootState) => ({
	...state.single.comments,
	curProductID: state.single.thunks.data!.id
});

const mapDispatchToProps = (dispatch: any) => ({
	loadComments: (productID: number, offset: number) => {
		dispatch(thunkComment(offset));
	},
	changedSort: (productID: number) => {
		dispatch(commentReset());
		dispatch(thunkComment(productID, 1));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

const ReviewsList: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<React.Fragment>
		<hr className="my-pad" color="silver"/>
		<div className="reviews-list__header">
			<div>{props.totalCount} comments</div>

			<ReviewSortForm onSubmit={() => props.changedSort(props.curProductID)}/>
		</div>

		<div className="reviews-list my-pad">
			{props.comments.map((comment) => (
				<Review
					comment={comment}
					key={comment.id}
				/>
			))}
		</div>

		<div className="load">
			{
				props.totalCount == props.comments.length ?
					false :
					<button
						type="button"
						className="load__more"
						onClick={
							() => props.loadComments(props.curProductID, props.currentPage + 1)
						}
					>
						{props.isLoading ? 'Loading...' : 'Load More'}
					</button>
			}
		</div>
	</React.Fragment>
);

export default connected(ReviewsList);
