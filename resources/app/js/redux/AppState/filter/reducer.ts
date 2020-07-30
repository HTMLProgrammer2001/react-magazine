//My components
import * as actionCreators from './actions';
import {FILTER_START, FILTER_SUCCESS, FILTER_ERROR} from './types';

import {InferActionTypes} from '../../index';
import {IFilter} from '../../../Interfaces/IFilter';


export type FilterActions = InferActionTypes<typeof actionCreators>;

export type FilterState = {
	isLoading: boolean,
	error: string | null,
	filters: IFilter | null
};

const initialState: FilterState = {
	isLoading: false,
	error: null,
	filters: null
};

const filtersReducer = (state: FilterState = initialState, action: FilterActions)
	: FilterState => {
	switch (action.type) {
	case FILTER_START:
		return {isLoading: true, error: null, filters: null};

	case FILTER_ERROR:
		return {isLoading: false, error: action.error, filters: null};

	case FILTER_SUCCESS:
		return {isLoading: false, error: null, filters: action.payload};
	}

	return state;
};

export default filtersReducer;
