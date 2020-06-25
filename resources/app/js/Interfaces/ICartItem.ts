import {IProduct, Size} from './IProduct';

export type ICartItem = {
	product: IProduct,
	count: number,
	size: Size,
	color: string
};
