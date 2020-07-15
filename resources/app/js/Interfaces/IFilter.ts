import {ICategory} from './ICategory';


export type IFilter = {
	categories: Array<ICategory>,
	priceRange: {
		from: number,
		to: number
	},
	colors: Array<string>
}
