import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import c from 'classnames';

import {Size} from '../../../Interfaces/IProduct';
import ColorGroup from '../../FormElements/ColorGroup';
import SizeGroup from '../../FormElements/SizeGroup';
import NumericElement from '../../FormElements/Numeric';


export type IAddCartData = {
	color: string,
	size: Size,
	count: number
};

type IOwnProps = {
	sizes: Array<Size>,
	colors: Array<string>,
	liked: boolean
};

type IFormProps = InjectedFormProps<IAddCartData, IOwnProps> & IOwnProps;

const AddCartForm: React.FC<IFormProps> = (props) => {
	const [isLiked, changeLike] = React.useState(props.liked);

	return (
		<form onSubmit={props.handleSubmit}>
			<div className="row space-between product__facilities">
				<div className="product__size row">
					<p>Size:</p>

					<Field
						component={SizeGroup}
						name="size"
						viewType="product"
						formName={props.form}
						sizes={props.sizes}
					/>
				</div>

				<div className="product__color row">
					<p>Color:</p>

					<Field
						component={ColorGroup}
						name="color"
						formName={props.form}
						colors={props.colors}
					/>
				</div>
			</div>

			<div className="my-pad">
				<div className="order">
					<div className="order__quantity">
						<b className="order__quantity-head">Quantity:</b>

						<Field
							component={NumericElement}
							name="count"
							formName={props.form}
						/>

					</div>

					<div className="order__actions row mt-2">
						<div
							className={c('order__like', {'order__like_active': isLiked})}
							onClick={() => changeLike(!isLiked)}
						>
							<i className="fas fa-heart"/>
						</div>

						<button type="submit" className="order__add">Add to cart</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default reduxForm<IAddCartData, IOwnProps>({
	form: 'addCart'
})(AddCartForm);
