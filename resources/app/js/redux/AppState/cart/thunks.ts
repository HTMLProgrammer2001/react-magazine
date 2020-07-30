import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {
	cartReset,
	cartLoadSuccess,
	cartLoadError,
	cartLoadStart,
	cartRemove,
	cartAdd
} from './actions';
import API from '../../../Helpers/API';

import {RootState} from '../../index';
import {CartActions} from './reducer';
import {ICartItemStorage} from '../../../Interfaces/ICartItemStorage';
import {IProduct} from '../../../Interfaces/IProduct';


export type CartThunkAction = ThunkAction<void, RootState, unknown, CartActions>;

const thunkCart = (): CartThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, CartActions>) => {
		let cartItems: Array<ICartItemStorage> = [];

		try{
			cartItems = JSON.parse(<string>localStorage.getItem('cartItems'));

			if(!cartItems || !cartItems.length)
				return;
		}
		catch (e) {
			return;
		}

		dispatch(cartLoadStart());

		let productIDs: Array<number> = cartItems.map((item) => (
			item.product
		));

		const cartResponse = await API.getProductsByIds(productIDs);

		if(API.isError(cartResponse)){
			dispatch(cartLoadError(cartResponse.message));
		}
		else{
			let parsedCartItems = cartItems.map((item) => ({
				...item,
				product: <IProduct>cartResponse.find((i) => i.id == item.product)
			}));

			dispatch(cartLoadSuccess(parsedCartItems));
		}
	};

export default thunkCart;
