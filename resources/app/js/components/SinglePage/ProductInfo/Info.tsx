import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import {IFullProduct} from '../../../Interfaces/IFullProduct';
import {IProduct} from '../../../Interfaces/IProduct';
import AddCartForm, {IAddCartData} from './AddCartForm';
import Mark from '../../Mark';
import {cartAdd} from '../../../redux/AppState/cart/actions';


const mapDispatchToProps = (dispatch: Dispatch) => ({
	addCart: (formVals: IAddCartData, product: IProduct) => {
		dispatch(cartAdd({
			count: formVals.count,
			color: formVals.color,
			size: formVals.size,
			product
		}));
	}
});

const connected = connect(null, mapDispatchToProps);

type IInfoProps = {
	product: IFullProduct
};

const Info: React.FC<IInfoProps & ConnectedProps<typeof connected>> = (props) => (
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
			initialValues={{
				count: 1,
				size: props.product.sizes[0],
				color: props.product.colors[0]
			}}
			onSubmit={(vals: IAddCartData) => props.addCart(vals, props.product)}
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

export default connected(Info);
