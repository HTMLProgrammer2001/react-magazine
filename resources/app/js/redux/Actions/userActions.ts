import {
	USER_LOAD_START,
	USER_LOAD_ERROR,
	USER_LOAD_SUCCESSFULL,
	USER_LOGIN,
	USER_LOGOUT
} from '../actionTypes';
import {IUser} from '../../Interfaces/IUser';


export const loadUserStart = () => (<const>{
	type: USER_LOAD_START
});

export const loadUserError = (error: string) => (<const>{
	type: USER_LOAD_ERROR,
	error
});

export const loadUserSuccessfull = (user: IUser) => (<const>{
	type: USER_LOAD_SUCCESSFULL,
	payload: user
});
