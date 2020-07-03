import {IComment} from '../IComment';


export type ICommentsResponse = {
	total: number,
	current_page: number,
	to: number,
	data: Array<IComment>
};
