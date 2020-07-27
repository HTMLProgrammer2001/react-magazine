import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IBillingFormData} from '../../components/CheckoutPage/Form/BillingForm';
import {RootState} from '../Reducers';
import {CheckoutActions} from '../Reducers/checkout';
import {checkoutError, checkoutStart, checkoutSuccess} from '../Actions/checkoutActions';
import API from '../../Helpers/API';
import {cartReset} from '../Actions/App/cartActions';


type Actions = CheckoutActions | ReturnType<typeof cartReset>;
export type LoginThunkAction = ThunkAction<void, RootState, unknown, Actions>;

const thunkCheckout = (vals: IBillingFormData, formName: string): LoginThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, Actions>, getState) => {
		dispatch(checkoutStart());

		const {cartItems} = getState().cart;
		const mappedCartItems = cartItems.map((item) => {
			return {
				...item,
				product: item.product.id
			};
		});

		const checkoutResponse = await API.createOrder({
			...vals,
			cartItems: mappedCartItems
		});

		console.log(checkoutResponse);

		if(API.isError(checkoutResponse)){
			if(checkoutResponse.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					checkoutResponse.response!.data.errors,
					checkoutResponse.response!.data.message
				));
			}
			else{
				dispatch(checkoutError(checkoutResponse.response!.data.message));
			}
		}
		else{
			dispatch(reset(formName));
			dispatch(checkoutSuccess(checkoutResponse.success));
			dispatch(cartReset());
		}
	};

export default thunkCheckout;
