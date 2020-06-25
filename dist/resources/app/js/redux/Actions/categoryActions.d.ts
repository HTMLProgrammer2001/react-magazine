import { ICategory } from '../../Interfaces/ICategory';
export declare const categoryLoadStart: () => {
    type: string;
};
export declare const categoryLoadSuccess: (payload: Array<ICategory>) => {
    type: string;
    payload: ICategory[];
};
export declare const categoryLoadFailure: (error: string) => {
    type: string;
    error: string;
};
