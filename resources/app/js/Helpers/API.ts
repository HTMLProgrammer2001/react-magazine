import axios from 'axios';

import {IProductsResponse} from '../Interfaces/Responses/IProductsResponse';
import {IFullProduct} from '../Interfaces/IFullProduct';
import {ICommentsResponse} from '../Interfaces/Responses/ICommentsResponse';
import {IChangeLikeResponse} from '../Interfaces/Responses/IChangeLikeResponse';
import {IRegisterFormData} from '../components/RegisterPage/RegisterForm';
import {ILoginFormData} from '../components/LoginPage/LoginForm';
import {ILoadUserResponse} from '../Interfaces/Responses/ILoadUserResponse';
import {IResetFormData} from '../components/ResetPage/ResetForm';
import {IReviewFormData} from '../components/SinglePage/Reviews/ReviewForm';
import {ICategory} from '../Interfaces/ICategory';
import {IGoodsFormData} from '../components/HomePage/Goods/GoodsForm';
import {IFilter} from '../Interfaces/IFilter';
import {IChangeFormData} from '../components/ChangePasswordPage/ChangeForm';
import {ISearchResponse} from '../Interfaces/Responses/ISearchResponse';
import {IUser} from '../Interfaces/IUser';
import {IProduct} from '../Interfaces/IProduct';
import {IBillingFormData} from '../components/CheckoutPage/Form/BillingForm';
import {ICartItem} from '../Interfaces/ICartItem';


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
		return apiClient.post(`/products/${productID}/addComment`, vals, {
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
		return apiClient.post<{message: string}>('/register', vals);
	},

	verifyUser(id: string){
		return apiClient.get<{ success: string }>(`/verify/${id}`);
	},

	loginUser(vals: ILoginFormData){
		return apiClient.post<ILoadUserResponse>('/login', vals);
	},

	logoutUser(){
		return apiClient.post<{ success: string }>('/logout', {}, {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	resetUser(vals: IResetFormData){
		return apiClient.post<{ success: string }>('/reset', vals);
	},

	changePassword(id: string, vals: IChangeFormData){
		return apiClient.post<IChangeFormData>('/changePassword', vals, {
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

// class API {
// 	static async createOrder(data: IBillingFormData & {
// 	cartItems: any[] }):
// 		Promise<{ success: string } | AxiosError> {
// 		let response: AxiosResponse;
//
// 		try {
// 			response = await this.clientAPI.post<{ success:
// 			string }>('/orders', data, {
// 				headers: {
// 					Authorization: `Bearer ${localStorage.getIte
// 					m('token')}`
// 				}
// 			});
// 		} catch (err) {
// 			console.log(err.response.data);
// 			return err as AxiosError;
// 		}
//
// 		return response.data;
// 	}
// }
