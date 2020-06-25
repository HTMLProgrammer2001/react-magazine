import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';

import CheckboxGroup from '../../../FormElements/CheckboxGroup';
import ColorGroup from '../../../FormElements/ColorGroup';


type IGoodsFormData = {
	categories: {
		[key: string]: boolean
	},
	color: string
};

const GoodsForm: React.FC<InjectedFormProps<IGoodsFormData>> = (props) => (
	<form className="goods__form" onSubmit={props.handleSubmit}>

		<div className="goods__form-head">Product Categories</div>
		<div className="goods__categories">
			<Field
				component={CheckboxGroup}
				name="categories"
				options={['T1', 'T2', 'T3']}
			/>
		</div>

		<div className="goods__form-head">Filter by color</div>
		<div className="goods__color">
			<Field
				component={ColorGroup}
				name="color"
				colors={['red', 'green', 'yellow', 'black']}
			/>
		</div>

		<div className="goods__form-head">Filter by size</div>
		<ul className="goods__size">
			<li className="goods__size-item">XS</li>
			<li className="goods__size-item goods__size-item_active">S</li>
			<li className="goods__size-item">M</li>
			<li className="goods__size-item">L</li>
			<li className="goods__size-item">XL</li>
		</ul>

		<div className="goods__form-head">Filter by price</div>
		<div className="goods__price">
			<div className="goods__price-point left"/>
			<div className="goods__price-indicator"/>
			<div className="goods__price-point right"/>
		</div>
		<div className="goods__price-range">Price: $5 - $100</div>

		<button type="submit" className="goods__form-button">Filter</button>
	</form>
);

export default reduxForm<IGoodsFormData>({
	form: 'productFilter',
	initialValues: {
		categories: {},
		color: ''
	}
})(GoodsForm);
