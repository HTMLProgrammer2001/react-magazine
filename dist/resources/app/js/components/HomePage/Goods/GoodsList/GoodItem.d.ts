import * as React from 'react';
import { IProduct } from '../../../../Interfaces/IProduct';
declare type IGoodItemProps = {
    product: IProduct;
};
declare const GoodItem: React.FC<IGoodItemProps>;
export default GoodItem;
