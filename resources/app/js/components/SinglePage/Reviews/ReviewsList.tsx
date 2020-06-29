import * as React from 'react';

import {IComment} from '../../../Interfaces/IComment';
import {ICommentsResponse} from '../../../Interfaces/Responses/ICommentsResponse';
import API from '../../../Helpers/API';
import Review from './Review';
import ReviewSortForm, {IReviewSortFormData} from './ReviewSortForm';


type IReviewsProps = {
	productID: number
}

type IReviewsState = {
	isLoading: boolean,
	error: string,
	comments: Array<IComment>,
	total: number
}

class ReviewsList extends React.Component<IReviewsProps, IReviewsState>{
	constructor(props: IReviewsProps){
		super(props);

		this.state = {
			isLoading: false,
			error: '',
			comments: [],
			total: 0
		};

		this.loadMore = this.loadMore.bind(this);
	}

	componentDidMount(): void {
		this.loadMore();
	}

	render(){
		return (
			<React.Fragment>
				<hr className="my-pad" color="silver"/>
				<div className="reviews-list__header">
					<div>{this.state.total} comments</div>
					<ReviewSortForm onSubmit={(vals: IReviewSortFormData) => console.log(vals)}/>
				</div>

				<div className="reviews-list my-pad">
					{this.state.comments.map( (comment) => (
						<Review
							comment={comment}
							key={comment.id}
						/>
					) )}
				</div>

				<div className="load">
					{
						this.state.total == this.state.comments.length ?
							false :
							<button type="button" className="load__more" onClick={this.loadMore}>
								{this.state.isLoading ? 'Loading...' : 'Load More'}
							</button>
					}
				</div>
			</React.Fragment>
		);
	}

	async loadMore(){
		this.setState({
			isLoading: true
		});

		let commentsResp = await API.getComments(this.props.productID, this.state.comments.length);

		if(API.isError(commentsResp)){
			this.setState({
				error: commentsResp.response!.data
			});
		}
		else{
			this.setState((prev) => ({
				total: (commentsResp as ICommentsResponse).total,
				comments: prev.comments.concat((commentsResp as ICommentsResponse).comments)
			}));
		}

		this.setState({
			isLoading: false
		});
	}
}

export default ReviewsList;
