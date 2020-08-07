import {combineReducers} from 'redux';

import recommendReducer from './recommendProducts/reducer';
import favoriteReducer from './favoriteProducts/reducer';
import ordersReducer from './orders/reducer';
import reviewsReducer from './reviews/reducer';
import deleteReducer from './deleteAccount/reducer';


export default combineReducers({
	recommend: recommendReducer,
	favorite: favoriteReducer,
	orders: ordersReducer,
	reviews: reviewsReducer,
	delete: deleteReducer
});
