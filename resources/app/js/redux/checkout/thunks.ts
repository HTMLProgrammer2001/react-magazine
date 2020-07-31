import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IBillingFormData} from '../../components/CheckoutPage/Form/BillingForm';
import {RootState} from '../';
import {CheckoutActions} from './reducer';
import {checkoutError, checkoutSuccess, checkoutStart} from './actions';
import {dataApi} from '../../Helpers/API';
import {cartReset} from '../AppState/cart/actions';


type Actions = CheckoutActions | ReturnType<typeof cartReset>;
export type LoginThunkAction = ThunkAction<void, RootState, unknown, Actions>;

const thunkCheckout = (vals: IBillingFormData, formName: string): LoginThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, Actions>, getState) => {
		//Start checkout
		dispatch(checkoutStart());

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
			dispatch(checkoutSuccess(checkoutResponse.data.success));
			dispatch(cartReset());
		}
		catch (e) {
			if(e.data.response!.data.errors){
				//Update form error
				dispatch(updateSyncErrors(
					formName,
					e.data.response!.data.errors,
					e.data.response!.data.message
				));
			}

			dispatch(checkoutError(e.data.message));
		}
	};

export default thunkCheckout;
