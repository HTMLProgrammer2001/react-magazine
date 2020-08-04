import * as React from 'react';
import {IProduct} from '../../Interfaces/IProduct';
import Item from './Item';


type ISearchListProps = {
	products: IProduct[],
	search: string,
	count: number
};

const List: React.FC<ISearchListProps> = (props) => (
	<div className="search__list">
		{
			props.count ?
				props.products.map((product) => (
					<Item {...product} key={product.id}/>
				))
				:
				<div>No products was found for {props.search}</div>
		}
	</div>
);

export default List;
