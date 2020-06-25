import * as React from 'react';
import { IProduct } from '../../../../Interfaces/IProduct';
declare type IGoodsProps = {};
declare type IGoodsState = {
    products: Array<IProduct>;
    loaded: number;
    total: number;
    isLoading: boolean;
};
declare class GoodsList extends React.Component<IGoodsProps, IGoodsState> {
    constructor(props: IGoodsProps);
    render(): JSX.Element;
}
export default GoodsList;
