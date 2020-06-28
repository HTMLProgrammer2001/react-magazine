import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {IFullProduct} from '../../Interfaces/IFullProduct';

import API from '../../Helpers/API';
import Paginate from '../Paginate';
import Reviews from './Reviews/';
import ProductInfo from './ProductInfo/';


type IRouteParams = {
	slug: string
};

type ISingleProductState = {
	isLoading: boolean,
	error: string,
	product: IFullProduct | null
}

type ISingleProductProps = RouteComponentProps<IRouteParams>;

class SinglePage extends React.Component<ISingleProductProps, ISingleProductState>{
	constructor(props: ISingleProductProps){
		super(props);

		this.state = {
			isLoading: false,
			error: '',
			product: null
		};
	}
	
	async componentDidMount(){
		this.setState({
			isLoading: true
		});

		let productInfoResp = await API.getProductInfo(this.props.match.params.slug);

		if(API.isError(productInfoResp)){
			this.setState({
				error: productInfoResp.response!.data
			});
		}
		else{
			this.setState({
				product: productInfoResp
			});
		}

		this.setState({
			isLoading: false
		});
	}

	render(){
		return (
			<React.Fragment>
				<Paginate paths={[
					{name: 'Home', path: '/'},
					{name: 'Product', path: '/'}
				]}/>

				{this.state.isLoading && <div>Loading info...</div>}

				{
					!this.state.isLoading && this.state.product &&
						<React.Fragment>
							<ProductInfo product={this.state.product}/>
							<Reviews/>
						</React.Fragment>
				}
			</React.Fragment>
		);
	}
}

export default SinglePage;
