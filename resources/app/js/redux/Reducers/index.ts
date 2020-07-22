import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import cartReducer from './App/cart';
import categoryReducer from './category';
import registerReducer from './register';
import verifyReducer from './verify';
import loginReducer from './login';
import userReducer from './App/user';
import resetReducer from './reset';
import singleReducer from './Single';
import productListReducer from './productList';
import filterReducer from './App/filter';
import changeReducer from './change';
import searchReducer from './search';
import appReducer from './App/app';


const storeReducer = combineReducers({
	cart: cartReducer,
	category: categoryReducer,
	register: registerReducer,
	verify: verifyReducer,
	login: loginReducer,
	user: userReducer,
	reset: resetReducer,
	single: singleReducer,
	productList: productListReducer,
	filter: filterReducer,
	change: changeReducer,
	search: searchReducer,
	app: appReducer,
	form: formReducer
});

export type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;

type ActionCreators = {[key: string]: (...args: any) => any};
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionTypes<T extends ActionCreators> = ReturnType<PropertiesTypes<T>>;
