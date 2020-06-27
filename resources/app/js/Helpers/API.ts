import axios, {AxiosError, AxiosResponse} from 'axios';
import {IProductsResponse} from '../Interfaces/Responses/IProductsResponse';


export const clientAPI = axios.create({
	baseURL: 'http://localhost:8000/api'
});

class API{
	static async getProducts(offset?: number): Promise<IProductsResponse | AxiosError>{
		let body = {
			offset
		};
		
		let response: AxiosResponse;

		try {
			response = await clientAPI.get<Array<IProductsResponse>>('/getProducts', {
				params: body
			});
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
