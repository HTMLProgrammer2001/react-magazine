import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IBillingFormData} from '../../components/CheckoutPage/Form/BillingForm';
import {RootState} from '../';
import {CheckoutActions} from './reducer';
import {checkoutError, checkoutSuccess, checkoutStart} from './actions';
import API from '../../Helpers/API';
import {cartReset} from '../AppState/cart/actions';


type Actions = CheckoutActions | ReturnType<typeof cartReset>;
export type LoginThunkAction = ThunkAction<void, RootState, unknown, Actions>;

const thunkCheckout = (vals: IBillingFormData, formName: string): LoginThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, Actions>, getState) => {
		dispatch(checkoutStart());

		const {cartItems} = getState().cart;
		const mappedCartItems = cartItems.map((item) => ({
			...item,
			product: item.product.id
		}));

		const checkoutResponse = await API.createOrder({
			...vals,
			cartItems: mappedCartItems
		});

		console.log(checkoutResponse);

		if (API.isError(checkoutResponse)) {
			if (checkoutResponse.response!.data.errors) {
				dispatch(updateSyncErrors(
					formName,
					checkoutResponse.response!.data.errors,
					checkoutResponse.response!.data.message
				));
			} else {
				dispatch(checkoutError(checkoutResponse.response!.data.message));
			}
		} else {
			dispatch(reset(formName));
			dispatch(checkoutSuccess(checkoutResponse.success));
			dispatch(cartReset());
		}
	};

export default thunkCheckout;
