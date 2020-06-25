import * as React from 'react';
import { ICartItem } from '../../../Interfaces/ICartItem';
declare type ICartTableProps = {
    cartItems: Array<ICartItem>;
};
declare const CartTable: React.FC<ICartTableProps>;
export default CartTable;
