import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import GoodsItems from './GoodsList/';
import GoodsForm, {IGoodsFormData} from './GoodsForm/';
import {productListReset} from '../../../redux/Actions/Home/productListActions';
import thunkProductList from '../../../redux/ThunkActions/Home/thunkProductList';
import {RootState} from '../../../redux/Reducers';
import thunkFilter from '../../../redux/ThunkActions/Home/thunkFilters';


const mapStateToProps = (state: RootState) => ({
	filterState: state.filter
});

const mapDispatchToProps = (dispatch: any) => ({
	reloadGoods() {
		dispatch(productListReset());
		dispatch(thunkProductList());
	},
	loadFilters: () => {
		dispatch(thunkFilter());
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

const Goods: React.FC<ConnectedProps<typeof connected>> = (props) => {
	React.useEffect(() => {
		if(!props.filterState.filters)
			props.loadFilters();
	}, []);

	return (
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
};

export default connected(Goods);
