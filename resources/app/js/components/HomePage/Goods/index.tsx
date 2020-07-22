import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import GoodsItems from './GoodsList/';
import GoodsForm, {IGoodsFormData} from './GoodsForm/';
import {productListReset} from '../../../redux/Actions/productListActions';
import thunkProductList from '../../../redux/ThunkActions/thunkProductList';
import {RootState} from '../../../redux/Reducers';


const mapStateToProps = (state: RootState) => ({
	filterState: state.filter
});

const mapDispatchToProps = (dispatch: any) => ({
	reloadGoods() {
		dispatch(productListReset());
		dispatch(thunkProductList());
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

const Goods: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="goods">
		<div className="container">
			{props.filterState.isLoading && <div>Loading...</div>}

			{
				props.filterState.error &&
				<div className="red">{props.filterState.error}</div>
			}

			{
				props.filterState.filters &&
				<React.Fragment>
					<GoodsItems/>

					<GoodsForm onSubmit={
						(vals: IGoodsFormData) => {
							console.log(vals);
							props.reloadGoods();
						}
					}/>
				</React.Fragment>
			}
		</div>
	</div>
);

export default connected(Goods);
