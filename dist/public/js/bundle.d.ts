export type IProductServer = {
    products: Array<IProduct>;
    total: number;
    offset: number;
};
export type ILoginFormData = {
    email: string;
    password: string;
};
export default _default;
declare const _default: import("redux-form").DecoratedComponentClass<ILoginFormData, import("redux-form").DecoratedFormProps<ILoginFormData, {}, string>>;
