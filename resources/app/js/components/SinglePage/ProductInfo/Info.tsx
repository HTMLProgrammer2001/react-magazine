import * as React from 'react';
import {Link} from 'react-router-dom';

import {IFullProduct} from '../../../Interfaces/IFullProduct';
import AddCartForm, {IAddCartData} from './AddCartForm';
import Mark from '../../Mark';


type IInfoProps = {
	product: IFullProduct
};

const Info: React.FC<IInfoProps> = (props) => (
	<div className="product__info">
		<div className="row space-between product__info-head">
			<div className="product__name">
				{props.product.name}
			</div>

			<div className="product__price">
				${props.product.price.toFixed(2)}
			</div>
		</div>

		<div className="product__description">
			{props.product.description}
		</div>

		<AddCartForm
			colors={props.product.colors}
			sizes={props.product.sizes}
			liked={props.product.liked}
			onSubmit={(vals: IAddCartData) => console.log(vals)}
		/>

		<div className="product__share">
			<b>Share in:</b>
			<i className="fab fa-facebook-f product__share-soc"/>
			<i className="fab fa-twitter product__share-soc"/>
			<i className="fab fa-pinterest-p product__share-soc"/>
		</div>

		<div className="product__categories">
			<b>Category:</b>
			<span className="ml-1">
				<Link to={`/categories/${props.product.category}`}>
					{props.product.category}
				</Link>
			</span>
		</div>

		<div className="product__mark my-pad">
			<b className="product__mark-head">Average mark:</b>
			<span>
				<Mark rating={props.product.mark} fixed/>
			</span>
		</div>
	</div>
);

export default Info;
