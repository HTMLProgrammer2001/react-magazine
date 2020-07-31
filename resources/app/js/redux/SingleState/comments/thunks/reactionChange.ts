import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../../index';
import {commentReactionChange} from '../actions';
import {dataApi} from '../../../../Helpers/API';


type ReactionAction = ReturnType<typeof commentReactionChange>;
export type ToggleLikeThunkAction = ThunkAction<void, RootState, unknown, ReactionAction>;

const thunkReactionChange = (commentID: number, reaction: string): ToggleLikeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ReactionAction>) => {
		try{
			const reactionResponse = await dataApi.changeReaction(commentID, reaction);
			
			if(reactionResponse.data.success){
				dispatch(commentReactionChange(commentID, reaction));
			}
		}
		catch (e) {
			console.log(e);	
		}
	};

export default thunkReactionChange;
