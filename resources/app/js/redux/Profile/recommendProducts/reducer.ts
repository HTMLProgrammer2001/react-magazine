import * as actionsCreators from './actions';
import {RECOMMEND_LOAD_SUCCESS, RECOMMEND_LOAD_ERROR, RECOMMEND_LOAD_START} from './types';
import {InferActionTypes} from '../../';
import {IProduct} from '../../../Interfaces/IProduct';


export type RecommendActions = InferActionTypes<typeof actionsCreators>;

export type IRecommendState = {
	error: string | null,
	isLoading: boolean,
	products: IProduct[]
}

const initialState: IRecommendState = {
	error: null,
	isLoading: false,
	products: []
};

const recommendReducer = (state: IRecommendState = initialState, action: RecommendActions):
	IRecommendState => {
	switch (action.type) {
	case RECOMMEND_LOAD_START:
		return {...state, error: null, isLoading: true};

	case RECOMMEND_LOAD_ERROR:
		return {...state, error: action.error, isLoading: false};

	case RECOMMEND_LOAD_SUCCESS:
		return {error: null, isLoading: false, products: action.payload};
	}

	return state;
};

export default recommendReducer;
