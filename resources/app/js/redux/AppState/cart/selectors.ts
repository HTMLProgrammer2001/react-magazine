import {createSelector} from 'reselect';

import {RootState} from '../../index';
import {ICartItem} from '../../../Interfaces/ICartItem';

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartCount = (state: RootState) => state.cart.cartItems.length;
export const selectCartState = (state: RootState) => state.cart;

export const selectCartPrice = createSelector([selectCartItems], (items: Array<ICartItem>) => (
	items.reduce((sum, item) => sum + item.count * item.product.price, 0)
));
