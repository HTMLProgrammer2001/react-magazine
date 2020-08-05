import * as React from 'react';
import {ILike} from '../../../Interfaces/ILike';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import thunkDeleteFav from '../../../redux/Profile/favoriteProducts/thunks/thunkDeleteFav';


const connected = connect(null, {
	del: thunkDeleteFav
});

type IFavoriteItemProps = {
	favorite: ILike
} & ConnectedProps<typeof connected>;

const FavoriteItem: React.FC<IFavoriteItemProps> = (props) => (
	<div className="table__row">
		<div className="table__col">#{props.favorite.id}</div>
		<div className="table__col">
			<img className="mb-10" src={`/image/${props.favorite.product.photo}`}/>
			<div>{props.favorite.product.name}</div>
		</div>

		<div className="table__col">
			<Link to={`/products/${props.favorite.product.slug}`}>
				<i className="fas fa-eye ml-10 cur"/>
			</Link>

			<i className="fas fa-times cur" onClick={() => props.del(props.favorite.id)}/>
		</div>
	</div>
);

export default connected(FavoriteItem);
