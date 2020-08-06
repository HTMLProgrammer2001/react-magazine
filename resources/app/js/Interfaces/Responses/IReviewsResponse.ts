import {IFullComment} from '../IFullComment';


export type IReviewsResponse = {
	meta: {
		total: number,
		current_page: number,
		to: number
	},
	data: IFullComment[]
};
