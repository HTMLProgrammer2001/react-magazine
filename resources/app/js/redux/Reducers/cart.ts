//My components
import {ICartItem} from '../../Interfaces/ICartItem';
import * as actionCreators from '../Actions/cartActions';
import {CART_ADD} from '../actionTypes';


type InferValuesType<T> = T extends {[key: string]: infer U} ? U : never;
type CartActions = ReturnType<InferValuesType<typeof actionCreators>>;

export type CartState = Array<ICartItem>;

const initialState: CartState = [];

const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
	switch (action.type) {
	case CART_ADD:
		return [...state, action.payload];
	}

	return state;
};

export default cartReducer;
