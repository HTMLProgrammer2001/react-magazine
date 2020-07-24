//My components
import {ICartItem} from '../../../Interfaces/ICartItem';
import * as actionCreators from '../../Actions/App/cartActions';
import {
	CART_ADD,
	CART_LOAD_ERROR,
	CART_LOAD_START,
	CART_LOAD_SUCCESS,
	CART_REMOVE,
	CART_RESET
} from '../../actionTypes';
import {InferActionTypes} from '../index';


export type CartActions = InferActionTypes<typeof actionCreators>;

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
			if(item.product.id == action.payload.product.id && item.color == action.payload.color
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
