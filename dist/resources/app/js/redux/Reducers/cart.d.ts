import { ICartItem } from '../../Interfaces/ICartItem';
declare type CartActions = {};
export declare type CartState = Array<ICartItem>;
declare const cartReducer: (state: CartState | undefined, action: CartActions) => CartState;
export default cartReducer;
