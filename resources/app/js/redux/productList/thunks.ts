import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {ProductListActions} from './reducer';
import {
	productListError,
	productListStart,
	productListSuccess
} from './actions';
import {dataApi} from '../../Helpers/API';
import {IGoodsFormData} from '../../components/HomePage/Goods/GoodsForm';
import {RootState} from '../index';


export type ProductListThunkAction = ThunkAction<void, RootState, unknown, ProductListActions>;

const thunkProductList = (offset: number = 1): ProductListThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ProductListActions>, getState) => {
		dispatch(productListStart());

		const selector = getFormValues('productFilter');
		const filters = selector(getState());

		try{
			const productListResponse = await dataApi.getProducts(<IGoodsFormData>filters, offset);

			dispatch(productListSuccess(productListResponse.data));
		}
		catch (e) {
			dispatch(productListError(e.message));
		}
	};

export default thunkProductList;
