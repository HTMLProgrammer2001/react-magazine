import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Review from './Review';
import ReviewSortForm from './ReviewSortForm';
import {RootState} from '../../../redux';
import {selectSingleComments, selectSingleID} from '../../../redux/SingleState/selectors';
import thunkComment from '../../../redux/SingleState/comments/thunks/thunkComment';
import {commentReset} from '../../../redux/SingleState/comments/actions';


const mapStateToProps = (state: RootState) => ({
	...selectSingleComments(state),
	curProductID: selectSingleID(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	loadComments: (productID: number, offset: number) => {
		dispatch(thunkComment(productID, offset));
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
				props.totalCount == props.comments.length && props.totalCount ?
					false :
					!props.totalCount ?
						<div>No comments yet</div> :
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
