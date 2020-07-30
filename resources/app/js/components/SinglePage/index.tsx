import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Paginate from '../Paginate';
import Reviews from './Reviews/';
import ProductInfo from './ProductInfo/';
import {RootState} from '../../redux/Reducers';
import thunkProduct from '../../redux/ThunkActions/Single/thunkProduct';


const mapStateToProps = (state: RootState) => ({
	...state.single.thunks
});

const mapDispatchToProps = (dispatch: any) => ({
	loadProduct: (slug: string) => {
		dispatch(thunkProduct(slug));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IRouteParams = {
	slug: string
};

type ISingleProductProps = RouteComponentProps<IRouteParams> & ConnectedProps<typeof connected>;

const SinglePage: React.FC<ISingleProductProps> = (props) => {
	React.useEffect(() => {
		if(!props.data || props.data.slug != props.match.params.slug)
			props.loadProduct(props.match.params.slug);
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[
				{name: 'Home', path: '/'},
				{name: 'Product', path: '/'}
			]}/>

			{props.isLoading && <div>Loading info...</div>}

			{
				!props.isLoading && props.data &&
				<React.Fragment>
					<ProductInfo product={props.data}/>
					<Reviews/>
				</React.Fragment>
			}
		</React.Fragment>
	);
};

export default connected(SinglePage);
