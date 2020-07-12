import {IComment} from '../IComment';


export type ICommentsResponse = {
	meta: {
		total: number,
		current_page: number,
		to: number
	},
	data: Array<IComment>
};
