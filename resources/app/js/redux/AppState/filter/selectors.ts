import {RootState} from '../../index';

export const selectFilterState = (state: RootState) => state.filter;
export const selectFilters = (state: RootState) => state.filter.filters;
