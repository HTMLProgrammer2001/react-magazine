import { ICategory } from '../../Interfaces/ICategory';
declare type CategoryActions = {};
export declare type CategoryState = {
    isLoading: boolean;
    error: string | null;
    categories: Array<ICategory>;
};
declare const categoryReducer: (state: CategoryState | undefined, action: CategoryActions) => CategoryState;
export default categoryReducer;
