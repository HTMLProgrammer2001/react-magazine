//My components
import * as actionCreators from './actions';
import {
	ORDERS_RESET,
	ORDERS_SUCCESS,
	ORDERS_ERROR,
	ORDERS_START
} from './types';

import {InferActionTypes} from '../../';
import {IOrder} from '../../../Interfaces/IOrder';


export type OrdersActions = InferActionTypes<typeof actionCreators>;

export type OrdersState = {
	totalCount: number,
	currentPage: number,
	isLoading: boolean,
	error: string | null,
	size: number,
	orders: IOrder[]
};

const initialState: OrdersState = {
	totalCount: 0,
	currentPage: 1,
	isLoading: false,
	error: null,
	size: 5,
	orders: []
};

const ordersReducer = (state: OrdersState = initialState, action: OrdersActions):
	OrdersState => {
	switch (action.type) {
	case ORDERS_RESET:
		return {...initialState};

	case ORDERS_START:
		return {
			...state,
			isLoading: true,
			error: null
		};

	case ORDERS_ERROR:
		return {
			...state,
			isLoading: false,
			error: action.error
		};

	case ORDERS_SUCCESS:
		return {
			...state,
			totalCount: action.payload.meta.total,
			currentPage: action.payload.meta.current_page,
			isLoading: false,
			error: null,
			orders: action.payload.data
		};
	}

	return state;
};

export default ordersReducer;
