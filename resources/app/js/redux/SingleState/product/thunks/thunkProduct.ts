import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {dataApi} from '../../../../Helpers/API/frontAPI';
import {RootState} from '../../../index';
import {ProductActions} from '../reducer';
import {commentReset} from '../../comments/actions';
import {productError, productNotFound, productStart, productSuccess} from '../actions';
import {toast} from 'react-toastify';


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
			if(e.response.status == 404){
				dispatch(productNotFound());
			}

			dispatch(productError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkProduct;
