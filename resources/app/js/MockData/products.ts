import {IProduct} from '../Interfaces/IProduct';


export type IProductServer = {
	products: Array<IProduct>
	total: number,
	offset: number
};
