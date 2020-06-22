import IProductD, {Size} from './IProduct';

export type ICartItem = {
	product: IProductD,
	count: number,
	size: Size,
	color: string
};
