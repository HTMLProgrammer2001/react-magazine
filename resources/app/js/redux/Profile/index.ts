import {combineReducers} from 'redux';

import recommendReducer from './recommendProducts/reducer';
import favoriteReducer from './favoriteProducts/reducer';


export default combineReducers({
	recommend: recommendReducer,
	favorite: favoriteReducer
});
