import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {dataApi} from '../../../../Helpers/API';
import {RootState} from '../../../index';
import {ProductActions} from '../reducer';
import {commentReset} from '../../comments/actions';
import {productError, productStart, productSuccess} from '../actions';


export type ProductThunkAction = ThunkAction<void, RootState, unknown, ProductActions>;

const thunkProduct = (slug: string): ProductThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ProductActions | ReturnType<typeof commentReset>>) => {
		dispatch(productStart());
		dispatch(commentReset());

		try{
			const productResponse = await dataApi.getProductInfo(slug);

			dispatch(productSuccess(productResponse.data));
		}
		catch (e) {
			dispatch(productError(e.data.message));
		}
	};

export default thunkProduct;
