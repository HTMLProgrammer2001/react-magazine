import {Size} from './IProduct';

export type ICartItemStorage = {
	product: number,
	count: number,
	size: Size,
	color: string
};
