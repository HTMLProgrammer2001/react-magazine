import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {
	cartLoadSuccess,
	cartLoadError,
	cartLoadStart
} from './actions';
import {dataApi} from '../../../Helpers/API';

import {RootState} from '../../index';
import {CartActions} from './reducer';
import {ICartItemStorage} from '../../../Interfaces/ICartItemStorage';


export type CartThunkAction = ThunkAction<void, RootState, unknown, CartActions>;

const thunkCart = (): CartThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, CartActions>) => {
		let cartItems: Array<ICartItemStorage> = [];

		try{
			//Load data from local storage
			cartItems = JSON.parse(<string>localStorage.getItem('cartItems'));

			if(!cartItems || !cartItems.length) {
				return;
			}
		}
		catch (e) {
			//On error break
			return;
		}

		//Start loading
		dispatch(cartLoadStart());

		//Parse product ids
		let productIDs: Array<number> = cartItems.map((item) => (
			item.product
		));

		try {
			//Get data
			const cartResponse = await dataApi.getProductsByIds(productIDs);

			//Parse cart items
			let parsedCartItems = cartItems.map((item) => ({
				...item,
				product: cartResponse.data.find((i) => i.id == item.product)
			}));

			//Load success
			dispatch(cartLoadSuccess(parsedCartItems));
		}
		catch (e) {
			//Error
			dispatch(cartLoadError(e.data.message));
		}
	};

export default thunkCart;
