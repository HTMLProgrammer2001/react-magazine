import axios from 'axios';

import {IProduct} from '../../Interfaces/IProduct';
import {IFavoriteResponse} from '../../Interfaces/Responses/IFavoriteResponse';
import {ISuccess} from './frontAPI';


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
	}
};

