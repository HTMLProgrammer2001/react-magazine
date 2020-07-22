import axios, {AxiosError, AxiosResponse} from 'axios';

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


class API{
	static clientAPI = axios.create({
		baseURL: 'http://localhost:8000/api',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	static async getProducts(filters: IGoodsFormData, offset?: number)
		: Promise<IProductsResponse | AxiosError>{

		let body = {
			page: offset
		};
		
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.post<Array<IProductsResponse>>(
				'/getProducts', filters, {
					params: body
				});
		}
		catch (err) {
			return err as AxiosError;
		}

		return response.data;
	}

	static async getProductInfo(slug: string): Promise<IFullProduct | AxiosError>{
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.get<IFullProduct>(`/products/${slug}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			});
		}
		catch (err) {
			return err as AxiosError;
		}

		return response.data;
	}

	static async getComments(productID: number, offset: number = 1, sortType?: string):
		Promise<ICommentsResponse | AxiosError>{

		let response: AxiosResponse;

		try {
			response = await this.clientAPI.get<ICommentsResponse>(
				`/products/${productID}/getComments`, {
					params: {
						page: offset,
						sortType
					}, headers: {
						'Authorization': `Bearer ${localStorage.getItem('token')}`
					}
				}
			);
		}
		catch (err) {
			return err as AxiosError;
		}

		return response.data;
	}

	static async changeLike(productID: number): Promise<IChangeLikeResponse | AxiosError>{
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.post<IChangeLikeResponse>(
				`/products/${productID}/changeLike`, {}, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				}
			);
		}
		catch (err) {
			return err as AxiosError;
		}

		return response.data;
	}

	static async registerUser(vals: IRegisterFormData): Promise<{message: string} | AxiosError>{
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.post<{message: string}>('/register', vals);
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async verifyUser(id: string): Promise<{success: string} | AxiosError>{
		let response: AxiosResponse;

		try{
			response = await this.clientAPI.get<{success: string}>(`/verify/${id}`);
		}
		catch (err) {
			console.log(err.response.data);

			return err as AxiosError;
		}

		return response.data;
	}

	static async loginUser(vals: ILoginFormData): Promise<ILoadUserResponse | AxiosError>{
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.post<{message: string}>('/login', vals);
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async logoutUser(): Promise<{success: string} | AxiosError>{
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.post<{success: string}>('/logout', {}, {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
			});
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async resetUser(vals: IResetFormData): Promise<{success: string} | AxiosError>{
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.post<{success: string}>('/reset', vals);
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async changeReaction(commentID: number, reaction: string):
		Promise<{success: boolean} | AxiosError>{

		let response: AxiosResponse;

		try{
			response = await this.clientAPI.post(`/comments/${commentID}/addReaction`, {
				reaction
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			});
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async addComment(productID: number, vals: IReviewFormData):
		Promise<{success: boolean} | AxiosError>{
		let response: AxiosResponse;

		try{
			response = await this.clientAPI.post(`/products/${productID}/addComment`, vals, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			});
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async getCategories(): Promise<ICategory[] | AxiosError>{
		let response: AxiosResponse;

		try{
			response = await this.clientAPI.get('/categories');
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async getFilters(): Promise<IFilter | AxiosError>{
		let response: AxiosResponse;

		try{
			response = await this.clientAPI.get<IFilter>('/productFilters');
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async changePassword(id: string, vals: IChangeFormData):
		Promise<{success: boolean} | AxiosError>{

		let response: AxiosResponse;

		try{
			response = await this.clientAPI.post<IChangeFormData>('/changePassword', {
				...vals
			}, {
				params: {
					id
				}
			});
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async search(text: string, page: number = 1): Promise<ISearchResponse | AxiosError>{
		let response: AxiosResponse;

		try{
			response = await this.clientAPI.get<ISearchResponse>('/search', {
				params: {
					search: text,
					page
				}
			});
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static async getUser(): Promise<IUser | AxiosError>{
		let response: AxiosResponse;

		try{
			response = await this.clientAPI.get<IUser>('/me', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			});
		}
		catch (err) {
			console.log(err.response.data);
			return err as AxiosError;
		}

		return response.data;
	}

	static isError(arg: any): arg is AxiosError{
		return 'response' in arg;
	}
}

export default API;
