//My components
import * as actionCreators from './actions';
import {
	CART_LOAD_ERROR,
	CART_UPDATE,
	CART_LOAD_START,
	CART_LOAD_SUCCESS,
	CART_RESET,
	CART_REMOVE,
	CART_ADD
} from './types';
import {InferActionTypes} from '../../index';
import {ICartItem} from '../../../Interfaces/ICartItem';


//Actions
export type CartActions = InferActionTypes<typeof actionCreators>;

//State
export type CartState = {
	isLoading: boolean,
	error: string,
	cartItems: Array<ICartItem>
};

const initialState: CartState = {
	isLoading: false,
	error: '',
	cartItems: []
};

//Reducer
const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
	switch (action.type) {
	case CART_ADD:
		let wasChanged = false;

		//Create new cart items array
		let newItems = state.cartItems.map((item) => {
			/*
			 * If same product, color and size
			 * then just increase count
			 */
			if(item.product.id == action.payload.thunks.id && item.color == action.payload.color
				&& item.size == action.payload.size){
				wasChanged = true;

				return {
					...item,
					count: item.count + action.payload.count,
					product: item.product
				};
			}
			else
				return item;
		});

		//Return new state
		return {
			...state,
			cartItems: wasChanged ? newItems : [...newItems, action.payload]
		};

	case CART_REMOVE:
		return {
			...state,
			cartItems: [
				...state.cartItems.slice(0, action.payload),
				...state.cartItems.slice(action.payload + 1)
			]
		};

	case CART_RESET:
		return {...state, cartItems: []};

	case CART_LOAD_START:
		return {...state, isLoading: true};

	case CART_LOAD_ERROR:
		return {...state, error: action.error};

	case CART_LOAD_SUCCESS:
		return {...state, cartItems: [...state.cartItems, ...action.payload]};
	}

	return state;
};

export default cartReducer;
