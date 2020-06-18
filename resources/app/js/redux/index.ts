import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import cartReducer from './cart';


const storeReducer = combineReducers({
	cart: cartReducer,
	form: formReducer
});

export type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;
