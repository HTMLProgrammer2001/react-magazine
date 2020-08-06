import {RootState} from '../../index';

export const selectOrdersState = (state: RootState) => state.profile.orders;
export const selectOrdersSize = (state: RootState) => state.profile.orders.size;
