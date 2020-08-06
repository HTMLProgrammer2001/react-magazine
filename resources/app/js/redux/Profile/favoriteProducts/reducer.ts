//My components
import * as actionCreators from './actions';
import {
	FAVORITE_START,
	FAVORITE_ERROR,
	FAVORITE_SUCCESS, FAVORITE_RESET, FAVORITE_DELETE
} from './types';

import {InferActionTypes} from '../../';
import {ILike} from '../../../Interfaces/ILike';


export type FavoriteActions = InferActionTypes<typeof actionCreators>;

export type FavoriteState = {
	totalCount: number,
	currentPage: number,
	isLoading: boolean,
	error: string | null,
	size: number,
	favorites: ILike[]
};

const initialState: FavoriteState = {
	totalCount: 0,
	currentPage: 1,
	isLoading: false,
	error: null,
	size: 5,
	favorites: []
};

const favoriteReducer = (state: FavoriteState = initialState, action: FavoriteActions):
	FavoriteState => {
	switch (action.type) {
	case FAVORITE_RESET:
		return {...initialState};

	case FAVORITE_START:
		return {
			...state,
			isLoading: true,
			error: null
		};

	case FAVORITE_ERROR:
		return {
			...state,
			isLoading: false,
			error: action.error
		};

	case FAVORITE_SUCCESS:
		return {
			...state,
			totalCount: action.payload.meta.total,
			currentPage: action.payload.meta.current_page,
			isLoading: false,
			error: null,
			favorites: action.payload.data
		};

	case FAVORITE_DELETE:
		return {
			...state,
			favorites: state.favorites.filter((f) => f.id != action.payload)
		};
	}

	return state;
};

export default favoriteReducer;
