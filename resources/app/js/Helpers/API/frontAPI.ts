import axios from 'axios';

import {IProductsResponse} from '../../Interfaces/Responses/IProductsResponse';
import {IFullProduct} from '../../Interfaces/IFullProduct';
import {ICommentsResponse} from '../../Interfaces/Responses/ICommentsResponse';
import {IChangeLikeResponse} from '../../Interfaces/Responses/IChangeLikeResponse';
import {IRegisterFormData} from '../../components/RegisterPage/RegisterForm';
import {ILoginFormData} from '../../components/LoginPage/LoginForm';
import {ILoadUserResponse} from '../../Interfaces/Responses/ILoadUserResponse';
import {IResetFormData} from '../../components/ResetPage/ResetForm';
import {IReviewFormData} from '../../components/SinglePage/Reviews/ReviewForm';
import {ICategory} from '../../Interfaces/ICategory';
import {IGoodsFormData} from '../../components/HomePage/Goods/GoodsForm';
import {IFilter} from '../../Interfaces/IFilter';
import {IChangeFormData} from '../../components/ChangePasswordPage/ChangeForm';
import {ISearchResponse} from '../../Interfaces/Responses/ISearchResponse';
import {IUser} from '../../Interfaces/IUser';
import {IProduct} from '../../Interfaces/IProduct';
import {IBillingFormData} from '../../components/CheckoutPage/Form/BillingForm';
import {IResendFormData} from '../../components/ResendPage/ResendForm';

export type ISuccess = {success: string};
export type IError = {message: string, errors?: string[]};


const apiClient = axios.create({
	baseURL: 'http://localhost:8000/api',
	headers: {
		'Content-Type': 'application/json'
	}
});

export const dataApi = {
	getProducts(filters: IGoodsFormData, offset: number = 1) {
		return apiClient.post<IProductsResponse>('/getProducts', filters, {
			params: {page: offset}
		});
	},

	getProductInfo(slug: string) {
		return apiClient.get<IFullProduct>(`/products/${slug}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	getComments(productID: number, offset: number = 1, sortType?: string){
		return apiClient.get<ICommentsResponse>(
			`/products/${productID}/getComments`, {
				params: {
					page: offset,
					sortType
				}, headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
			}
		);
	},

	changeLike(productID: number){
		return apiClient.post<IChangeLikeResponse>(
			`/products/${productID}/changeLike`, {}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}
		);
	},

	changeReaction(commentID: number, reaction: string){
		return apiClient.post(`/comments/${commentID}/addReaction`, {reaction}, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	addComment(productID: number, vals: IReviewFormData){
		return apiClient.post<ISuccess>(`/products/${productID}/addComment`, vals, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	getCategories(){
		return apiClient.get<ICategory[]>('/categories');
	},

	getFilters(){
		return apiClient.get<IFilter>('/productFilters');
	},

	search(text: string, page: number = 1){
		return apiClient.get<ISearchResponse>('/search', {
			params: {search: text, page}
		});
	},

	getProductsByIds(ids: number[]){
		return apiClient.get<IProduct[]>('/getProductsByIds', {
			params: {ids: JSON.stringify(ids)}
		});
	},

	createOrder(data: IBillingFormData & {cartItems: any[]}){
		return apiClient.post<{success: string}>('/orders', data, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	}
};

export const userApi = {
	registerUser(vals: IRegisterFormData){
		return apiClient.post<ISuccess>('/register', vals);
	},

	verifyUser(id: string){
		return apiClient.get<ISuccess>(`/verify/${id}`);
	},

	resendEmail(vals: IResendFormData){
		return apiClient.post<ISuccess>('/resend', vals);
	},

	loginUser(vals: ILoginFormData){
		return apiClient.post<ILoadUserResponse>('/login', vals);
	},

	logoutUser(){
		return apiClient.post<ISuccess>('/logout', {}, {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	resetUser(vals: IResetFormData){
		return apiClient.post<ISuccess>('/reset', vals);
	},

	validChange(id: string){
		return apiClient.get<ISuccess>('/change', {
			params: {id}
		});
	},

	changePassword(id: string, vals: IChangeFormData){
		return apiClient.post<IChangeFormData>('/change', vals, {
			params: {id}
		});
	},

	getUser(){
		return apiClient.get<IUser>('/me', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	}
};

export const isError = (resp: any): resp is IError => (
	'message' in resp
);

