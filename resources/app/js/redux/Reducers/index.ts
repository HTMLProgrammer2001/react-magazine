import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import cartReducer from './cart';
import categoryReducer from './category';


const storeReducer = combineReducers({
	cart: cartReducer,
	category: categoryReducer,
	form: formReducer
});

export type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;
