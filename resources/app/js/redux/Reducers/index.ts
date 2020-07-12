import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import cartReducer from './cart';
import categoryReducer from './category';
import registerReducer from './register';
import verifyReducer from './verify';
import loginReducer from './login';
import userReducer from './user';
import resetReducer from './reset';
import singleReducer from './Single';


const storeReducer = combineReducers({
	cart: cartReducer,
	category: categoryReducer,
	register: registerReducer,
	verify: verifyReducer,
	login: loginReducer,
	user: userReducer,
	reset: resetReducer,
	single: singleReducer,
	form: formReducer
});

export type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;

type ActionCreators = {[key: string]: (...args: any) => any};
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionTypes<T extends ActionCreators> = ReturnType<PropertiesTypes<T>>;
