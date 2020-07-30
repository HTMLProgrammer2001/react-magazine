import addCommentReducer from './addComment/reducer';
import commentReducer from './comments/reducer';
import productComment from './product/reducer';

import {combineReducers} from 'redux';


export default combineReducers({
	addComment: addCommentReducer,
	comments: commentReducer,
	product: productComment
});
