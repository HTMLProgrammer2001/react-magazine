import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {OrdersActions} from '../reducer';

import {ordersStart, ordersError, ordersSuccess} from '../actions';
import {profileAPI} from '../../../../Helpers/API/ProfileAPI';
import {RootState} from '../../../index';
import {toast} from 'react-toastify';
import {selectOrdersSize} from '../selectors';
import {IOrdersFormData} from '../../../../components/Profile/OrdersPage/OrdersForm';


export type FavoriteThunkAction = ThunkAction<void, RootState, unknown, OrdersActions>;

const thunkOrders = (offset: number = 1): FavoriteThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, OrdersActions>, getState) => {
		dispatch(ordersStart());

		const orderForm = <IOrdersFormData>getFormValues('ordersFind')(getState());
		console.log(orderForm);

		const size = selectOrdersSize(getState());

		try{
			const ordersResponse = await profileAPI.getOrders(offset, size, orderForm);

			dispatch(ordersSuccess(ordersResponse.data));
		}
		catch (e) {
			dispatch(ordersError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkOrders;
