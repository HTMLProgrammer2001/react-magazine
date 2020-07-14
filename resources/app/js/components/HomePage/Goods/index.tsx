import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import GoodsItems from './GoodsList/';
import GoodsForm, {IGoodsFormData} from './GoodsForm/';
import {productListReset} from '../../../redux/Actions/productListActions';
import thunkProductList from '../../../redux/ThunkActions/thunkProductList';


const mapDispatchToProps = (dispatch: any) => ({
	reloadGoods(){
		dispatch(productListReset());
		dispatch(thunkProductList());
	}
});

const connected = connect(null, mapDispatchToProps);

const Goods: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="goods">
		<div className="container">
			<GoodsItems/>

			<GoodsForm onSubmit={
				(vals: IGoodsFormData) => {
					console.log(vals);
					props.reloadGoods();
				}
			}/>
		</div>
	</div>
);

export default connected(Goods);

