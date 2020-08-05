import {ILike} from '../ILike';

export type IFavoriteResponse = {
	meta: {
		total: number,
		current_page: number,
		to: number
	},
	data: ILike[]
};
