import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Paginator from '../Paginator';
import FavoriteForm from './FavoriteForm';
import {RootState} from '../../../redux';
import {selectFavoriteState} from '../../../redux/Profile/favoriteProducts/selectors';
import thunkFavorite from '../../../redux/Profile/favoriteProducts/thunks/thunkFavorite';
import {favoriteReset} from '../../../redux/Profile/favoriteProducts/actions';
import Loader from '../../Loader';
import FavoriteItem from './FavoriteItem';


const mapStateToProps = (state: RootState) => ({
	...selectFavoriteState(state)
});

const connected = connect(mapStateToProps, (dispatch: any) => ({
	getFavorite: (page: number = 1) => {
		dispatch(thunkFavorite(page));
	},
	changeFilter: () => {
		dispatch(favoriteReset());
		dispatch(thunkFavorite());
	}
}));

type IFavoritePageProps = ConnectedProps<typeof connected>;

const FavoritePage: React.FC<IFavoritePageProps> = (props) => {
	React.useEffect(() => {
		if(!props.favorites.length)
			props.getFavorite();
	}, []);

	return (
		<div className="admContent">
			<div className="container">
				<div className="myOrders py-pad">
					<div className="pull-right">
						<span className="but but_outline">Continue shopping</span>
					</div>

					<h3>My favorite</h3>

					<FavoriteForm onSubmit={props.changeFilter}/>

					<div className="table__wrap">
						<div className="table">
							<div className="table__head">
								<div className="table__head-item">ID</div>
								<div className="table__head-item">Product</div>
								<div className="table__head-item">Actions</div>
							</div>

							<div className="table__content">
								{props.isLoading && <Loader/>}
								{props.error && <div className="red">{props.error}</div>}

								{
									!props.isLoading && !props.error &&
									props.favorites.map((f) => (
										<FavoriteItem
											favorite={f}
											key={f.id}
										/>
									))
								}
							</div>
						</div>
					</div>
				</div>

				<Paginator
					totalPage={Math.ceil(props.totalCount/props.size)}
					curPage={props.currentPage}
					handler={props.getFavorite}
				/>
			</div>
		</div>
	);
};

export default connected(FavoritePage);
