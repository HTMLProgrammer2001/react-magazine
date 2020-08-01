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
import logoutReducer from './logout/reducer';
import userReducer from './AppState/user/reducer';
import productListReducer from './productList/reducer';
import searchReducer from './search/reducer';
import verifyReducer from './verify/reducer';
import loginReducer from './login/reducer';


const storeReducer = combineReducers({
	app: appReducer,
	cart: cartReducer,
	filter: filtersReducer,
	single: singleReducer,
	categories: categoryReducer,
	change: changeReducer,
	checkout: checkoutReducer,
	login: loginReducer,
	logout: logoutReducer,
	user: userReducer,
	productList: productListReducer,
	search: searchReducer,
	verify: verifyReducer,
	form: formReducer
});

export type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;

type ActionCreators = {[key: string]: (...args: any) => any};
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionTypes<T extends ActionCreators> = ReturnType<PropertiesTypes<T>>;
