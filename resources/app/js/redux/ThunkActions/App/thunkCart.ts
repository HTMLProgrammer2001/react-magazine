import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../Reducers';
import {CartActions} from '../../Reducers/App/cart';
import {cartLoadStart, cartLoadError, cartLoadSuccess} from '../../Actions/App/cartActions';
import API from '../../../Helpers/API';
import {ICartItemStorage} from '../../../Interfaces/ICartItemStorage';
import {IProduct} from '../../../Interfaces/IProduct';
import {ICartItem} from '../../../Interfaces/ICartItem';


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
