//Categories action types
import {ICategory} from '../../Interfaces/ICategory';

import {
	CATEGORY_LOAD_START,
	CATEGORY_LOAD_ERROR,
	CATEGORY_LOAD_SUCCESS
} from '../actionTypes';


//Category action creators
export const categoryLoadStart = () => (<const>{
	type: CATEGORY_LOAD_START
});

export const categoryLoadSuccess = (payload: Array<ICategory>) => (<const>{
	type: CATEGORY_LOAD_SUCCESS,
	payload
});

export const categoryLoadFailure = (error: string) => (<const>{
	type: CATEGORY_LOAD_ERROR,
	error
});
