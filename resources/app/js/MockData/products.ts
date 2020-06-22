import {IProduct} from '../redux/Reducers/cart';


export type IProductServer = {
	products: Array<IProduct>
	total: number,
	offset: number
};
