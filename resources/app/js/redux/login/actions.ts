import {LOGIN_CLEAR, LOGIN_RESEND, LOGIN_RESET} from './types';


export const loginResend = () => (<const>{
	type: LOGIN_RESEND
});

export const loginReset = () => (<const>{
	type: LOGIN_RESET
});

export const loginClear = () => (<const>{
	type: LOGIN_CLEAR
});
