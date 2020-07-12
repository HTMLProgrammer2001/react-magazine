import {IUser} from './IUser';

export type IComment = {
	id: number,
	author: IUser,
	message: string,
	likes: number,
	dislikes: number,
	isLiked: boolean,
	date: string,
	mark: number,
	curReaction: string | null
};
