import * as React from 'react';

import {IProduct} from '../../../../Interfaces/IProduct';
import GoodItem from './GoodItem';


type IGoodsProps = {};

type IGoodsState = {
	products: Array<IProduct>,
	loaded: number,
	total: number,
	isLoading: boolean
}

class GoodsList extends React.Component<IGoodsProps, IGoodsState>{
	constructor(props: IGoodsProps){
		super(props);

		this.state = {
			products: [],
			loaded: 0,
			total: 0,
			isLoading: false
		};
	}

	render(){
		if(this.state.isLoading) {
			return (
				<div className="goods__items">
					<div>Loading products...</div>
				</div>
			);
		}

		if(!this.state.isLoading && !this.state.loaded){
			return (
				<div className="goods__items">
					<div>No products that accept this filter</div>
				</div>
			);
		}

		return (
			<div className="goods__items">
				<div className="goods__head">
					<div className="goods__head-count">
						Showing {this.state.loaded} of {this.state.total} products
					</div>

					<div className="select cur">
						<select className="select__input cur">
							<option>Featured products</option>
							<option>All</option>
						</select>
						<i className="fas fa-chevron-down select__icon"/>
						<div className="select__line"/>
					</div>
				</div>

				<div className="goods__list">
					{
						this.state.products.map( (item) => (
							<GoodItem product={item} key={item.id}/>
						))
					}
				</div>

				{
					this.state.total == this.state.loaded ?
						false :
						<div className="goods__list-load">
							<button type="button" className="goods__list-more">Load More</button>
						</div>
				}
			</div>
		);
	}
}

export default GoodsList;
