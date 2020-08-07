import {IOrder} from './IOrder';
import {IOrderItem} from './IOrderItem';

export type IFullOrder = IOrder & {
	productsItems: IOrderItem[]
};
