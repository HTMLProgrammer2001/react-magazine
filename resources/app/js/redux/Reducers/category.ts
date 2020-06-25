//My components
import {ICategory} from '../../Interfaces/ICategory';
import * as actionCreators from '../Actions/categoryActions';


//Action type

type InferValuesType<T> = T extends {[key: string]: infer U} ? U : never;
type CategoryActions = ReturnType<InferValuesType<typeof actionCreators>>;

export type CategoryState = {
	isLoading: boolean,
	error: string | null,
	categories: Array<ICategory>
};

const initialState: CategoryState = {
	isLoading: false,
	error: null,
	categories: [{
		name: 'Test',
		productCount: 32,
		slug: 'test'
	}]
};

const categoryReducer = (state: CategoryState = initialState,
						 action: CategoryActions): CategoryState => {
	console.log(1);
	return state;
};

export default categoryReducer;
