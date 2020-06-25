import { IProduct } from '../../Interfaces/IProduct';
export declare const cartAdd: (product: IProduct) => {
    type: string;
    payload: IProduct;
};
export declare const cartRemove: (id: number) => {
    type: string;
    payload: number;
};
export declare const cartReset: () => {
    type: string;
};
