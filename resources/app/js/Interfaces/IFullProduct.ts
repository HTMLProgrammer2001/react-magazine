import {Size, IProduct} from './IProduct';

export type IFullProduct = IProduct & {
	images: Array<string>,
	category: string,
	mark: number,
	description: string,
	liked: boolean
};
