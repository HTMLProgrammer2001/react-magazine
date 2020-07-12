import {combineReducers} from 'redux';

import CommentReducer from './comments';
import ProductReducer from './product';

export default combineReducers({
	comments: CommentReducer,
	product: ProductReducer
});
