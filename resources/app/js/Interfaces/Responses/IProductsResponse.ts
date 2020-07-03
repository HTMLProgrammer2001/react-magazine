import {IProduct} from '../IProduct';

export type IProductsResponse = {
	total: number,
	current_page: number,
	to: number,
	data: Array<IProduct>
};
