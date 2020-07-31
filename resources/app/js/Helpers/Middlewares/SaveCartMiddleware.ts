import {AnyAction, Dispatch, Middleware, MiddlewareAPI} from 'redux';
import {CART_ADD, CART_REMOVE, CART_RESET} from '../../redux/AppState/cart/types';
import {ICartItem} from '../../Interfaces/ICartItem';
import {ICartItemStorage} from '../../Interfaces/ICartItemStorage';
import {RootState} from '../../redux';


const actions = [CART_ADD, CART_REMOVE, CART_RESET];

//Function that convert cart items for set in local storage
const cartToStorage = (products: Array<ICartItem>): Array<ICartItemStorage> => (
	products.map((prod) => ({
		...prod,
		product: prod.product.id
	}))
);

const saveCartMiddleware: Middleware = (store: MiddlewareAPI<Dispatch<AnyAction>, RootState>) =>
	(next: Dispatch<AnyAction>) => (action: AnyAction) => {
		let nextCall = next(action);

		if(~actions.indexOf(action.type)){
			let {cartItems} = store.getState().cart;
			localStorage.setItem('cartItems', JSON.stringify(cartToStorage(cartItems)));
		}

		return nextCall;
	};

export default saveCartMiddleware;
