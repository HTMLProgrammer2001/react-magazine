import axios from 'axios';

import {IProduct} from '../../Interfaces/IProduct';
import {IFavoriteResponse} from '../../Interfaces/Responses/IFavoriteResponse';
import {ISuccess} from './frontAPI';
import {IOrdersFormData} from '../../components/Profile/OrdersPage/OrdersForm';
import {IOrdersResponse} from '../../Interfaces/Responses/IOrdersResponse';
import {IReviewsResponse} from '../../Interfaces/Responses/IReviewsResponse';
import {IReviewsFormData} from '../../components/Profile/ReviewsPage/ReviewsForm';
import {IChangePasswordData} from '../../components/Profile/SettingsPage/ChangePasswordForm';


const apiClient = axios.create({
	baseURL: 'http://localhost:8000/api/profile',
	headers: {
		'Content-Type': 'application/json'
	}
});

export const profileAPI = {
	getProducts(){
		return apiClient.get<IProduct[]>('/recommendationProducts');
	},

	getFavorite(page: number = 1, size: number = 5, find: string = ''){
		return apiClient.get<IFavoriteResponse>('/favorite', {
			params: {page, find, size},
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	deleteFavorite(id: number){
		return apiClient.delete<ISuccess>('/favorite', {
			params: {id},
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	getOrders(page: number = 1, size: number = 5, form: IOrdersFormData){
		return apiClient.get<IOrdersResponse>('/orders', {
			params: {page, size, ...form},
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	getReviews(page: number = 1, size: number = 5, form: IReviewsFormData){
		return apiClient.get<IReviewsResponse>('/reviews', {
			params: {page, size, ...form},
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	changePassword(vals: IChangePasswordData){
		return apiClient.post<ISuccess>('/account/password', vals, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	deleteAccount(){
		return apiClient.delete<ISuccess>('/account', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
	},

	changePersonal(){

	}
};

