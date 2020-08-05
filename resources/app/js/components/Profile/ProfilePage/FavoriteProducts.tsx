import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import FavoriteProductItem from './FavoriteProductItem';
import {RootState} from '../../../redux';
import thunkRecommend from '../../../redux/Profile/recommendProducts/thunks';
import {selectRecommendState} from '../../../redux/Profile/recommendProducts/selectors';
import Loader from '../../Loader';


const mapStateToProps = (state: RootState) => ({
	...selectRecommendState(state)
});

const connected = connect(mapStateToProps, {
	getRecommend: thunkRecommend
});

type IFavoriteProductsProps = ConnectedProps<typeof connected>;

const FavoriteProducts: React.FC<IFavoriteProductsProps> = (props) => {
	React.useEffect(() => {
		props.getRecommend();
	}, []);

	return (
		<div className="container">
			<div className="sales my-pad">
				<h3>Top sales</h3>

				{props.isLoading && <Loader/>}
				{props.error && <div className="red">{props.error}</div>}

				{
					!props.isLoading && !props.error &&
					<div className="sales__list goods__list">
						{
							props.products.map((p) => (
								<FavoriteProductItem key={p.id} {...p}/>
							))
						}
					</div>
				}
			</div>
		</div>
	);
};

export default connected(FavoriteProducts);
