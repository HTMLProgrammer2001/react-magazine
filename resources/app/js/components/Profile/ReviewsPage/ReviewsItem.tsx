import * as React from 'react';
import Mark from '../../Mark';
import {IFullComment} from '../../../Interfaces/IFullComment';
import {Link} from 'react-router-dom';


type IReviewsItemProps = {
	review: IFullComment
}

const ReviewsItem: React.FC<IReviewsItemProps> = ({review}) => (
	<div className="table__row">
		<div className="table__col">#{review.id}</div>
		<div className="table__col">{review.date}</div>
		<div className="table__col">
			<img className="mb-10" src={`/image/${review.product.photo}`}/>
			<div>{review.product.name}</div>
		</div>

		<div className="table__col">
			<Mark rating={review.mark} fixed/>
		</div>

		<div className="table__col">
			<Link to={`/products/${review.product.slug}#${review.id}`}>
				<i className="fas fa-eye ml-10 cur"/>
			</Link>
		</div>
	</div>
);

export default ReviewsItem;
