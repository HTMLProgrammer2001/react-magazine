import {AnyAction, Dispatch, Middleware, MiddlewareAPI} from 'redux';
import {ICartItem} from '../../Interfaces/ICartItem';
import {ICartItemStorage} from '../../Interfaces/ICartItemStorage';
import {RootState} from '../../redux';


//Function that convert cart items for set in local storage
const cartToStorage = (products: Array<ICartItem>): Array<ICartItemStorage> => (
	products.map((prod) => ({
		...prod,
		product: prod.product.id
	}))
);

const saveCartMiddleware: Middleware = (store: MiddlewareAPI<Dispatch<AnyAction>, RootState>) =>
	(next: Dispatch<AnyAction>) => (action: AnyAction) => {
		let cartBefore = store.getState().cart.cartItems,
			nextCall = next(action);

		if(cartBefore != store.getState().cart.cartItems){
			let {cartItems} = store.getState().cart;
			localStorage.setItem('cartItems', JSON.stringify(cartToStorage(cartItems)));
		}

		return nextCall;
	};

export default saveCartMiddleware;
