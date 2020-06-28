import {Size} from './IProduct';

export type IFullProduct = {
	id: number,
	slug: string,
	name: string,
	colors: Array<string>,
	images: Array<string>,
	price: number,
	sizes: Array<Size>,
	category: string,
	mark: number,
	description: string,
	liked: boolean
};
