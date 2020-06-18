import {Action} from 'redux';

//My components

interface IProduct {
	id: number,
	name: string,
	price: number,
	color: string,
	photo: string,
	size: 'XS' | 'S' | 'M' | 'L' | 'XL'
}

export interface ICartItem{
	product: IProduct,
	count: number
}

export type CartState = Array<ICartItem>;

const initialState: CartState = [{
	count: 3,
	product: {
		id: 1,
		name: 'T-Shirt',
		price: 45,
		color: 'black',
		photo: '/image/product.png',
		size: 'XL'
	}
}];

const cartReducer = (state: CartState = initialState, action: Action) => state;

export default cartReducer;
