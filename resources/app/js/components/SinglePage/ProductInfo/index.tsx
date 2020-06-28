import * as React from 'react';

import {IFullProduct} from '../../../Interfaces/IFullProduct';
import Gallery from './Galery';
import Info from './Info';


type IProductInfoProps = {
	product: IFullProduct
}

const ProductInfo: React.FC<IProductInfoProps> = (props) => (
	<div className="product">
		<div className="container">
			<div className="row space-between product__content">
				<Gallery images={props.product.images}/>
				<Info product={props.product}/>
			</div>
		</div>
	</div>
);

export default ProductInfo;
