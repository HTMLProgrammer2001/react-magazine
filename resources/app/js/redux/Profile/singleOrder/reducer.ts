//My components
import * as actionCreators from './actions';
import {
	SINGLE_ORDER_NOT_FOUND,
	SINGLE_ORDER_SUCCESS,
	SINGLE_ORDER_ERROR,
	SINGLE_ORDER_START
} from './types';

import {InferActionTypes} from '../../';
import {IFullOrder} from '../../../Interfaces/IFullOrder';


export type SingleOrderActions = InferActionTypes<typeof actionCreators>;

export type SingleOrderState = {
	isLoading: boolean,
	notFound: boolean,
	error: string | null,
	order: IFullOrder | null
};

const initialState: SingleOrderState = {
	isLoading: false,
	notFound: false,
	error: null,
	order: null
};

const singleOrderReducer = (state: SingleOrderState = initialState, action: SingleOrderActions):
	SingleOrderState => {
	switch (action.type) {
	case SINGLE_ORDER_START:
		return {...initialState, isLoading: true};

	case SINGLE_ORDER_ERROR:
		return {...initialState, error: action.error};

	case SINGLE_ORDER_SUCCESS:
		return {...initialState, order: action.payload};

	case SINGLE_ORDER_NOT_FOUND:
		return {...initialState, notFound: true};

	}

	return state;
};

export default singleOrderReducer;
