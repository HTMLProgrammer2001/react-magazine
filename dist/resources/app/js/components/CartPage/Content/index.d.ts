import * as React from 'react';
import { ICartItem } from '../../../Interfaces/ICartItem';
declare type ICartContentProps = {
    cartItems: Array<ICartItem>;
};
declare const Content: React.FC<ICartContentProps>;
export default Content;
