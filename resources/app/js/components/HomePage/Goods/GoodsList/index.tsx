import * as React from 'react';

import {IProduct} from '../../../../Interfaces/IProduct';
import {IProductsResponse} from '../../../../Interfaces/Responses/IProductsResponse';
import API from '../../../../Helpers/API';
import GoodItem from './GoodItem';
import GoodsHeader from './GoodsHeader';

type IGoodsProps = {};

type IGoodsState = {
	products: Array<IProduct>,
	loaded: number,
	total: number,
	currentPage: number,
	isLoading: boolean,
	error: boolean
}

class GoodsList extends React.Component<IGoodsProps, IGoodsState>{
	constructor(props: IGoodsProps){
		super(props);

		this.state = {
			products: [],
			loaded: 0,
			total: 0,
			currentPage: 0,
			error: false,
			isLoading: false
		};
	}

	componentDidMount(){
		this.getProducts();
	}

	render(){
		return (
			<div className="goods__items">
				<GoodsHeader
					loaded={this.state.loaded}
					total={this.state.total}/>

				<div className="goods__list">
					{
						this.state.products.map( (item) => (
							<GoodItem product={item} key={item.id}/>
						))
							||
						<div>No products that accept this filter</div>
					}
				</div>

				{
					this.state.total == this.state.loaded && !this.state.isLoading ?
						false :
						<div className="goods__list-load">
							<button
								type="button"
								className="goods__list-more"
								onClick={() => this.getProducts(this.state.currentPage + 1)}
							>
								{this.state.isLoading ? 'Loading...' : 'Load More'}
							</button>
						</div>
				}
			</div>
		);
	}

	async getProducts(offset: number = 1){
		this.setState({
			isLoading: true
		});

		let resp = await API.getProducts(offset);

		if(API.isError(resp)){
			this.setState({
				error: resp.response!.data
			});
		}
		else{
			const productsResponse = resp as IProductsResponse;

			this.setState((prev) => ({
				products: prev.products.concat(productsResponse.data),
				loaded: productsResponse.to,
				currentPage: productsResponse.current_page,
				total: productsResponse.total
			}));
		}

		this.setState({
			isLoading: false
		});
	}
}

export default GoodsList;
