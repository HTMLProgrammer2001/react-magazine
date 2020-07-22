//My components
import {ICartItem} from '../../../Interfaces/ICartItem';
import * as actionCreators from '../../Actions/App/cartActions';
import {CART_ADD, CART_REMOVE, CART_RESET} from '../../actionTypes';
import {InferActionTypes} from '../index';


type CartActions = InferActionTypes<typeof actionCreators>;

export type CartState = Array<ICartItem>;

const initialState: CartState = [];

//Function that convert cart items for set in local storage
const cartToStorage = (products: Array<ICartItem>) => (
	products.map((prod) => ({
		...prod,
		product: prod.product.id
	}))
);

const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
	switch (action.type) {
	case CART_ADD:
		//Try to find cart item with same characteristics
		let cartItem: ICartItem | undefined = state.find((item: ICartItem) => (
			item.product.id == action.payload.product.id
			&& item.color == action.payload.color
			&& item.size == action.payload.size
		));

		if(cartItem) {
			//If we find it than add count to this item
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
			//Add new cart item
			return [...state, action.payload];
		}

	case CART_REMOVE:
		return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];

	case CART_RESET:
		return [];
	}

	//Set cart items to storage
	localStorage.setItem('cartItems', JSON.stringify(cartToStorage(state)));

	return state;
};

export default cartReducer;
