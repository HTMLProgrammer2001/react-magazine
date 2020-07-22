import {IProduct} from '../IProduct';


export type ISearchResponse = {
	data: IProduct[],
	total: number,
	current_page: number
};
