import {Action} from 'redux';

//My components

interface CartItem{
	name: string,
	count: number,
	price: number
}

interface CartState {
	items: Array<CartItem>
}

const initialState: CartState = {
	items: []
};

const cartReducer = (state: CartState = initialState, action: Action) => state;

export default cartReducer;
