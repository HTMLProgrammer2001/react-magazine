import axios, {AxiosError, AxiosResponse} from 'axios';

import {IProductsResponse} from '../Interfaces/Responses/IProductsResponse';
import {IFullProduct} from '../Interfaces/IFullProduct';
import {ICommentsResponse} from '../Interfaces/Responses/ICommentsResponse';
import {IChangeLikeResponse} from '../Interfaces/Responses/IChangeLikeResponse';
import {IRegisterFormData} from '../components/RegisterPage/RegisterForm';


class API{
	static clientAPI = axios.create({
		baseURL: 'http://localhost:8000/api'
	});

	static async getProducts(offset?: number): Promise<IProductsResponse | AxiosError>{
		let body = {
			page: offset
		};
		
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.get<Array<IProductsResponse>>('/getProducts', {
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
			response = await this.clientAPI.get<IFullProduct>(`/products/${slug}`);
		}
		catch (err) {
			return err as AxiosError;
		}

		return response.data;
	}

	static async getComments(productID: number, offset: number = 1):
		Promise<ICommentsResponse | AxiosError>{

		let response: AxiosResponse;

		try {
			response = await this.clientAPI.get<ICommentsResponse>(
				`/products/${productID}/getComments`, {
					params: {
						page: offset
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
				`/products/${productID}/changeLike`
			);
		}
		catch (err) {
			return err as AxiosError;
		}

		return response.data;
	}

	static async registerUser(vals: IRegisterFormData): Promise<any | AxiosError>{
		let response: AxiosResponse;

		try {
			response = await this.clientAPI.post<any>('/register', vals);
		}
		catch (err) {
			return err as AxiosError;
		}

		return response.data;
	}

	static isError(arg: any): arg is AxiosError{
		return 'response' in arg;
	}
}

export default API;
