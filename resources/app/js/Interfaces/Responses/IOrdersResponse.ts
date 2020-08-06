import {IOrder} from '../IOrder';


export type IOrdersResponse = {
	meta: {
		total: number,
		current_page: number,
		to: number
	},
	data: IOrder[]
};
