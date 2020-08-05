import {IProduct} from '../IProduct';


export type ISearchResponse = {
	data: IProduct[],
	meta: {
		total: number,
		current_page: number
	}
};
