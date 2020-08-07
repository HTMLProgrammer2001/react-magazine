import {IProduct, Size} from './IProduct';

export type IOrderItem = {
	price: number,
	count: number,
	color: string,
	size: Size,
	product: IProduct
};
