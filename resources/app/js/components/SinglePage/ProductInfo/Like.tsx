import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import c from 'classnames';

import thunkToggleLike from '../../../redux/ThunkActions/thunkToggleLike';
import {RootState} from '../../../redux/Reducers';


const mapStateToProps = (state: RootState) => ({
	isLiked: state.single.thunks.data!.liked,
	productID: state.single.thunks.data!.id
});

const connected = connect(mapStateToProps, {
	toggleLike: thunkToggleLike
});

type ILikeProps = ConnectedProps<typeof connected>;


const Like: React.FC<ILikeProps> = (props) => (
	<div
		className={c('order__like', {'order__like_active': props.isLiked})}
		onClick={() => props.toggleLike(props.productID)}
	>
		<i className="fas fa-heart"/>
	</div>
);

export default connected(Like);
