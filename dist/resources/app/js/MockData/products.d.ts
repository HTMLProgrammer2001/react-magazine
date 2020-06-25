import { IProduct } from '../redux/Reducers/cart';
export declare type IProductServer = {
    products: Array<IProduct>;
    total: number;
    offset: number;
};
