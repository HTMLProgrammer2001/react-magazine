import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import GoodItem from './GoodItem';
import GoodsHeader from './GoodsHeader';
import {RootState} from '../../../../redux/Reducers';
import thunkProductList from '../../../../redux/ThunkActions/thunkProductList';


const mapStateToProps = (state: RootState) => ({
	goodsListState: state.productList,
	loadedGoods: state.productList.products.length
});

const connected = connect(mapStateToProps, {
	loadGoods: thunkProductList
});

type IGoodsProps = ConnectedProps<typeof connected>;

const GoodsList: React.FC<IGoodsProps> = (props) => {
	React.useEffect(() => {
		if(!props.loadedGoods)
			props.loadGoods();
	}, []);

	return (
		<div className="goods__items">
			<GoodsHeader
				loaded={props.loadedGoods}
				total={props.goodsListState.totalCount}/>

			<div className="goods__list">
				{
					props.goodsListState.products.map((item) => (
						<GoodItem product={item} key={item.id}/>
					))
					||
					<div>No products that accept this filter</div>
				}
			</div>

			{
				props.loadedGoods == props.goodsListState.totalCount &&
				!props.goodsListState.isLoading ?
					false :
					<div className="goods__list-load">
						<button
							type="button"
							className="goods__list-more"
							onClick={
								() => {
									props.loadGoods(props.goodsListState.currentPage + 1);
								}
							}
						>
							{props.goodsListState.isLoading ? 'Loading...' : 'Load More'}
						</button>
					</div>
			}
		</div>
	);
};

export default connected(GoodsList);
