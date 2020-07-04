import {IUser} from './IUser';

export type IComment = {
	id: number,
	author: IUser,
	message: string,
	likes: number,
	dislikes: number,
	date: string,
	mark: number
};
