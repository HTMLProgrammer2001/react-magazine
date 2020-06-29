import {IComment} from '../IComment';


export type ICommentsResponse = {
	total: number,
	comments: Array<IComment>
};
