import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {RootState} from '../Reducers';
import {ProductListActions} from './reducer';
import {
	productListError,
	productListStart,
	productListSuccess
} from './actions';
import API from '../../Helpers/API';
import {IGoodsFormData} from '../../components/HomePage/Goods/GoodsForm';


export type ProductListThunkAction = ThunkAction<void, RootState, unknown, ProductListActions>;

const thunkProductList = (offset: number = 1): ProductListThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ProductListActions>, getState) => {
		dispatch(productListStart());

		const selector = getFormValues('productFilter');
		const filters = selector(getState());

		console.log(filters);

		const productListResponse = await API.getProducts(<IGoodsFormData>filters, offset);

		if(API.isError(productListResponse)){
			dispatch(productListError(productListResponse.message));
		}
		else{
			dispatch(productListSuccess(productListResponse));
		}
	};

export default thunkProductList;
