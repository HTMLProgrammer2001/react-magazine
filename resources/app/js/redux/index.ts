import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

//My stores
import appReducer from './AppState/app/reducer';
import cartReducer from './AppState/cart/reducer';
import filtersReducer from './AppState/filter/reducer';
import singleReducer from './SingleState/';
import categoryReducer from './category/reducer';
import changeReducer from './change/reducer';
import checkoutReducer from './checkout/reducer';
import loginReducer from './login/reducer';
import userReducer from './AppState/user/reducer';


const storeReducer = combineReducers({
	app: appReducer,
	cart: cartReducer,
	filter: filtersReducer,
	single: singleReducer,
	categories: categoryReducer,
	change: changeReducer,
	checkout: checkoutReducer,
	login: loginReducer,
	user: userReducer,
	form: formReducer
});

export type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;

type ActionCreators = {[key: string]: (...args: any) => any};
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionTypes<T extends ActionCreators> = ReturnType<PropertiesTypes<T>>;
