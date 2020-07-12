import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../Reducers';
import {ProductActions} from '../Reducers/Single/product';
import {productStart, productError, productSuccess} from '../Actions/Single/productActions';
import API from '../../Helpers/API';
import {commentReset} from '../Actions/Single/commentsActions';


export type ProductThunkAction = ThunkAction<void, RootState, unknown, ProductActions>;

const thunkProduct = (slug: string): ProductThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ProductActions | ReturnType<typeof commentReset>>) => {
		dispatch(productStart());
		dispatch(commentReset());

		const productResponse = await API.getProductInfo(slug);

		if(API.isError(productResponse)){
			dispatch(productError(productResponse.message));
		}
		else{
			dispatch(productSuccess(productResponse));
		}
	};

export default thunkProduct;
