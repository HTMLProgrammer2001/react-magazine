import * as React from 'react';
import {reduxForm, InjectedFormProps, Field, formValueSelector, change, submit} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router';

import {RootState} from '../../../../redux/Reducers';
import CheckboxGroup from '../../../FormElements/CheckboxGroup';
import ColorGroup from '../../../FormElements/ColorGroup';
import SizeGroup from '../../../FormElements/SizeGroup';
import Slider from '../../../FormElements/Slider';


const selector = formValueSelector('productFilter');

const connected = connect((state: RootState) => ({
	range: selector(state, 'priceRange'),
	filters: state.filter.filters
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

type IOwnProps = ConnectedProps<typeof connected> & RouteComponentProps<{}>;

const GoodsForm: React.FC<InjectedFormProps<IGoodsFormData, IOwnProps> & IOwnProps> = (props) => {
	React.useEffect(() => {
		//Get params
		const params = new URLSearchParams(props.location.search);
		const catValue: {[key: number]: boolean} = {};

		if(params.get('category')){
			//Find default category
			const cat = props.filters!.categories!.find((item) => (
				item.slug == params.get('category')
			));

			//Set to true
			if(cat)
				catValue[cat.id] = true;

			//Change form values
			props.dispatch(change('productFilter', 'categories', catValue));
		}

		//Send form
		props.dispatch(submit('productFilter'));
	}, []);

	return (
		<form className="goods__form" onSubmit={props.handleSubmit}>
			<div className="goods__form-head">Product Categories</div>
			<div className="goods__categories">
				<Field
					component={CheckboxGroup}
					name="categories"
					formName={props.form}
					options={props.filters!.categories.map((cat) => ({
						text: cat.name,
						value: cat.id
					}))}
				/>
			</div>

			<div className="goods__form-head">Filter by color</div>
			<div className="goods__color">
				<Field
					component={ColorGroup}
					name="color"
					formName={props.form}
					colors={props.filters!.colors}
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
				min={props.filters!.priceRange.from}
				max={props.filters!.priceRange.to}
			/>

			<div className="goods__price-range">
				Price: ${props.range?.from.toFixed(2)} - ${props.range?.to.toFixed(2)}
			</div>

			<button type="submit" className="goods__form-button">Filter</button>
		</form>
	);
};

const GoodsFormRedux = reduxForm<IGoodsFormData, IOwnProps>({
	form: 'productFilter',
	initialValues: {
		categories: {},
		color: '',
		size: '',
		priceRange: {
			from: 0,
			to: 200
		}
	}
})(GoodsForm);

export default withRouter(connected(GoodsFormRedux));
