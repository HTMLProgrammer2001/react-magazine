import {
	REGISTER_ERROR,
	REGISTER_START,
	REGISTER_SUCCESSFULL
} from '../actionTypes';
import {IUser} from '../../Interfaces/IUser';


export const registerStart = () => (<const>{
	type: REGISTER_START
});

export const registerSuccess = (user: IUser) => (<const>{
	type: REGISTER_SUCCESSFULL,
	payload: user
});

export const registerError = (error: string) => (<const>{
	type: REGISTER_ERROR,
	error
});
