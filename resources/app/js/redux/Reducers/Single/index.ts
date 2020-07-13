import {combineReducers} from 'redux';

import CommentReducer from './comments';
import ProductReducer from './product';
import AddCommentReducer from './addComment';

export default combineReducers({
	comments: CommentReducer,
	product: ProductReducer,
	addComment: AddCommentReducer
});
