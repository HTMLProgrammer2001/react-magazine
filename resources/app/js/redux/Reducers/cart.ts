//My components
import {ICartItem} from '../../Interfaces/ICartItem';
import * as actionCreators from '../Actions/cartActions';
import {CART_ADD, CART_REMOVE, CART_RESET} from '../actionTypes';
import {InferActionTypes} from './index';


type CartActions = InferActionTypes<typeof actionCreators>;

export type CartState = Array<ICartItem>;

const initialState: CartState = [];

const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
	switch (action.type) {
	case CART_ADD:
		let cartItem: ICartItem | undefined = state.find((item: ICartItem) => (
			item.product.id == action.payload.product.id
			&& item.color == action.payload.color
			&& item.size == action.payload.size
		));

		if(cartItem) {
			return state.map((item: ICartItem) => (
				item == cartItem ?
					{
						...item,
						count: item.count + action.payload.count,
						product: action.payload.product
					}
					: item
			));
		}
		else {
			return [...state, action.payload];
		}

	case CART_REMOVE:
		return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];

	case CART_RESET:
		return [];
	}

	return state;
};

export default cartReducer;
