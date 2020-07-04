import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import cartReducer from './cart';
import categoryReducer from './category';
import registerReducer from './register';


const storeReducer = combineReducers({
	cart: cartReducer,
	category: categoryReducer,
	register: registerReducer,
	form: formReducer
});

export type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;
