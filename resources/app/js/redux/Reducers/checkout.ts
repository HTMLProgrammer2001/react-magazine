//My components
import * as actionCreators from '../Actions/checkoutActions';
import {InferActionTypes} from './index';
import {CHECKOUT_ERROR, CHECKOUT_SUCCESS, CHECKOUT_START} from '../actionTypes';


//Action type
export type CheckoutActions = InferActionTypes<typeof actionCreators>;

export type CheckoutState = {
	isLoading: boolean,
	error: string | null,
	message: string
};

const initialState: CheckoutState = {
	isLoading: false,
	error: null,
	message: ''
};

const checkoutReducer = (state: CheckoutState = initialState,
						 action: CheckoutActions): CheckoutState => {
	switch (action.type) {
	case CHECKOUT_START:
		return {...state, isLoading: true, error: null};
	case CHECKOUT_ERROR:
		return {...state, isLoading: false, error: action.error};
	case CHECKOUT_SUCCESS:
		return {message: action.payload, isLoading: false, error: null};
	}

	return state;
};

export default checkoutReducer;
