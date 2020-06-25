import * as React from 'react';
import { ICartItem } from '../../../Interfaces/ICartItem';
declare type ICartCheckoutProps = {
    cartItems: Array<ICartItem>;
};
declare const Checkout: React.FC<ICartCheckoutProps>;
export default Checkout;
