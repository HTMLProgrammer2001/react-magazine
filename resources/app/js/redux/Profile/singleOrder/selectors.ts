import {RootState} from '../../index';
import {IFullOrder} from '../../../Interfaces/IFullOrder';

export const selectSingleOrderState = (state: RootState) => state.profile.singleOrder;
export const selectSingleOrder = (state: RootState) => <IFullOrder>state.profile.singleOrder.order;
