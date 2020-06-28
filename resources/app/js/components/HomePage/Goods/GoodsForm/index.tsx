import * as React from 'react';
import {reduxForm, InjectedFormProps, Field, formValueSelector} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../../redux/Reducers';
import CheckboxGroup from '../../../FormElements/CheckboxGroup';
import ColorGroup from '../../../FormElements/ColorGroup';
import SizeGroup from '../../../FormElements/SizeGroup';
import Slider from '../../../FormElements/Slider';


const selector = formValueSelector('productFilter');

const connected = connect((state: RootState) => ({
	range: selector(state, 'priceRange')
}));

export type IGoodsFormData = {
	categories: {
		[key: string]: boolean
	},
	color: string,
	size: string,
	priceRange: {
		from: number,
		to: number
	}
}

type IOwnProps = ConnectedProps<typeof connected>;

const GoodsForm: React.FC<InjectedFormProps<IGoodsFormData, IOwnProps> & IOwnProps> = (props) => (
	<form className="goods__form" onSubmit={props.handleSubmit}>
		<div className="goods__form-head">Product Categories</div>
		<div className="goods__categories">
			<Field
				component={CheckboxGroup}
				name="categories"
				formName={props.form}
				options={['T1', 'T2', 'T3']}
			/>
		</div>

		<div className="goods__form-head">Filter by color</div>
		<div className="goods__color">
			<Field
				component={ColorGroup}
				name="color"
				formName={props.form}
				colors={['red', 'green', 'yellow', 'black']}
			/>
		</div>

		<div className="goods__form-head">Filter by size</div>
		<Field
			component={SizeGroup}
			name="size"
			formName={props.form}
			sizes={['XS', 'S', 'M', 'L', 'XL']}
		/>

		<div className="goods__form-head">Filter by price</div>
		<Field
			component={Slider}
			name="priceRange"
			formName={props.form}
			min={0}
			max={1000}
		/>

		<div className="goods__price-range">
			Price: ${props.range?.from.toFixed(2)} - ${props.range?.to.toFixed(2)}
		</div>

		<button type="submit" className="goods__form-button">Filter</button>
	</form>
);

const GoodsFormRedux = reduxForm<IGoodsFormData, IOwnProps>({
	form: 'productFilter',
	initialValues: {
		categories: {},
		color: '',
		size: 'S',
		priceRange: {
			from: 100,
			to: 500
		}
	}
})(GoodsForm);

export default connected(GoodsFormRedux);
