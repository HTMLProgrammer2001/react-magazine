import {USER_LOAD_START, USER_LOAD_ERROR, USER_RESET, USER_LOAD_SUCCESSFULL} from './types';
import {IUser} from '../../../Interfaces/IUser';


export const loadUserStart = () => (<const>{
	type: USER_LOAD_START
});

export const loadUserError = (error: string) => (<const>{
	type: USER_LOAD_ERROR,
	error
});

export const loadUserSuccessfull = (userInf: {user: IUser, token: string}) => (<const>{
	type: USER_LOAD_SUCCESSFULL,
	payload: userInf
});

export const resetUser = () => (<const>{
	type: USER_RESET
});
