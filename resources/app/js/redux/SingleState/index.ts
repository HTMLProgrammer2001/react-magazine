import commentReducer from './comments/reducer';
import productComment from './product/reducer';

import {combineReducers} from 'redux';


export default combineReducers({
	comments: commentReducer,
	product: productComment
});
