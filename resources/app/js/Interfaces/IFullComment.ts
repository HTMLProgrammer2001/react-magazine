import {IComment} from './IComment';
import {IProduct} from './IProduct';

export type IFullComment = IComment & {
	product: IProduct
};
