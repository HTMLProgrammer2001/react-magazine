import { IAccountFormData } from './CreateAccountForm';
export declare type IBillingFormData = {
    first: string;
    last: string;
    company: string;
    country: string;
    city: string;
    postcode: string;
    address: string;
    email: string;
    notes: string;
    payment: string;
} & IAccountFormData;
declare const _default: import("redux-form").DecoratedComponentClass<IBillingFormData, import("redux-form").DecoratedFormProps<IBillingFormData, {}, string>>;
export default _default;
