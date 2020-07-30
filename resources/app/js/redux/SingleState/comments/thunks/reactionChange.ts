import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../../index';
import {commentReactionChange} from '../actions';
import API from '../../../../Helpers/API';


type ReactionAction = ReturnType<typeof commentReactionChange>;
export type ToggleLikeThunkAction = ThunkAction<void, RootState, unknown, ReactionAction>;

const thunkReactionChange = (commentID: number, reaction: string): ToggleLikeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ReactionAction>) => {
		let reactionResponse = await API.changeReaction(commentID, reaction);

		if(!API.isError(reactionResponse) && reactionResponse.success){
			dispatch(commentReactionChange(commentID, reaction));
		}
	};

export default thunkReactionChange;
