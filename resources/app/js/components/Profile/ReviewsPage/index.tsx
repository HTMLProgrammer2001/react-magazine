import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';
import {selectReviewsState} from '../../../redux/Profile/reviews/selectors';
import {reviewsReset} from '../../../redux/Profile/reviews/actions';
import Paginator from '../Paginator';
import ReviewsForm from './ReviewsForm';
import Loader from '../../Loader';
import ReviewsItem from './ReviewsItem';
import thunkReviews from '../../../redux/Profile/reviews/thunks/thunkReviews';


const mapStateToProps = (state: RootState) => ({
	...selectReviewsState(state)
});

const connected = connect(mapStateToProps, (dispatch: any) => ({
	getReviews(page: number = 1){
		dispatch(thunkReviews(page));
	},
	changeFilter(){
		dispatch(reviewsReset());
		dispatch(thunkReviews());
	}
}));

type IReviewsPageProps = ConnectedProps<typeof connected>;

const ReviewsPage: React.FC<IReviewsPageProps> = (props) => {
	React.useEffect(() => {
		props.getReviews(1);
	}, []);

	return (
		<div className="admContent">
			<div className="container">
				<div className="myOrders py-pad">
					<div className="pull-right">
						<span className="but but_outline">Continue shopping</span>
					</div>

					<h3>My reviews</h3>

					<ReviewsForm onSubmit={props.changeFilter}/>

					<div className="table__wrap">
						<div className="table">
							<div className="table__head">
								<div className="table__head-item">ID</div>
								<div className="table__head-item">Date</div>
								<div className="table__head-item">Product</div>
								<div className="table__head-item">Mark</div>
								<div className="table__head-item">Actions</div>
							</div>

							<div className="table__content">
								{props.isLoading && <Loader/>}
								{props.error && <div className="red">{props.error}</div>}

								{
									!props.isLoading && !props.error &&
									props.reviews.map((review) => (
										<ReviewsItem
											key={review.id}
											review={review}
										/>
									))
								}
							</div>
						</div>
					</div>
				</div>

				<Paginator
					totalPage={Math.ceil(props.totalCount / props.size)}
					handler={props.getReviews}
					curPage={props.currentPage}
				/>
			</div>
		</div>
	);
};

export default connected(ReviewsPage);

