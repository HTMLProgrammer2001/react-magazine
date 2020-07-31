import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import c from 'classnames';

import thunkToggleLike from '../../../redux/SingleState/product/thunks/thunkToggleLike';
import {RootState} from '../../../redux';
import {selectIsLiked, selectSingleID} from '../../../redux/SingleState/selectors';


const mapStateToProps = (state: RootState) => ({
	isLiked: selectIsLiked(state),
	productID: selectSingleID(state)
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
