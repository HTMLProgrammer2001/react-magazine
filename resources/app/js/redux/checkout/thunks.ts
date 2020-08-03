import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {FormAction, reset, startSubmit, stopSubmit} from 'redux-form';
import {toast} from 'react-toastify';

import {IBillingFormData} from '../../components/CheckoutPage/Form/BillingForm';
import {RootState} from '../';
import {dataApi} from '../../Helpers/API';
import {cartReset} from '../AppState/cart/actions';


type Actions = FormAction;
export type LoginThunkAction = ThunkAction<Promise<boolean>, RootState, unknown, Actions>;

const thunkCheckout = (vals: IBillingFormData, formName: string): LoginThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, Actions>, getState) => {
		//Start checkout
		dispatch(startSubmit(formName));

		//Load cart items
		const {cartItems} = getState().cart;
		const mappedCartItems = cartItems.map((item) => ({
			...item,
			product: item.product.id
		}));

		try{
			//Request
			const checkoutResponse = await dataApi.createOrder({
				...vals,
				cartItems: mappedCartItems
			});

			//Success
			dispatch(reset(formName));
			dispatch(cartReset());

			toast.success(checkoutResponse.data.success);

			return true;
		}
		catch (e) {
			//Update form error
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error('Error in checkout');

			return false;
		}
	};

export default thunkCheckout;
