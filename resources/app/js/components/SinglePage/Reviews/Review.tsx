import * as React from 'react';
import c from 'classnames';
import {connect, ConnectedProps} from 'react-redux';

import Mark from '../../Mark';
import {IComment} from '../../../Interfaces/IComment';
import thunkReactionChange from '../../../redux/ThunkActions/thunkReactionChange';


const connected = connect(null, {
	changeReaction: thunkReactionChange
});

type IReviewProps = {
	comment: IComment
} & ConnectedProps<typeof connected>

const Review: React.FC<IReviewProps> = ({comment, changeReaction}) => (
	<React.Fragment>
		<span id={`comment_${comment.id}`}/>

		<div className="reviews-list__item row">
			<img className="reviews__ava" src={`/image/${comment.author.avatar}`} alt="User ava"/>
			<div className="reviews-list__wrap">
				<div className="reviews-list__name">
					<p>{comment.author.name}</p>

					<div className="reviews-list__icons">
						<i className="fas fa-link reviews-list__icon"/>
						<i className="fas fa-exclamation-triangle reviews-list__icon"/>
					</div>
				</div>

				<div className="my-1">
					<Mark rating={comment.mark} fixed/>
				</div>

				<div className="reviews-list__message">
					<p>{comment.message}</p>
				</div>

				<div className="reviews-list__item-footer">
					<div className="reviews-list__item-mark">
						<span>
							<i className="fas fa-angle-up"/>
							<span
								className={c({active: comment.curReaction == 'up'})}
								onClick={() => {
									if(comment.curReaction != 'up')
										changeReaction(comment.id, 'up');
								}}
							>&nbsp;{comment.likes}</span>
						</span>

						<span>
							<i className="fas fa-angle-down"/>
							<span
								className={c({active: comment.curReaction == 'down'})}
								onClick={() => {
									if(comment.curReaction != 'down')
										changeReaction(comment.id, 'down');
								}}
							>&nbsp;{comment.dislikes}</span>
						</span>
					</div>

					<div className="reviews-list__item-date">{comment.date}</div>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default connected(Review);
