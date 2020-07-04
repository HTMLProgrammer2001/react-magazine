//My components
import {ICartItem} from '../../Interfaces/ICartItem';
import * as actionCreators from '../Actions/registerActions';
import {REGISTER_ERROR, REGISTER_SUCCESSFULL, REGISTER_START} from '../actionTypes';


type InferValuesType<T> = T extends {[key: string]: infer U} ? U : never;
type RegisterActions = ReturnType<InferValuesType<typeof actionCreators>>;

export type RegisterState = {
	error: string | null,
	isLoading: boolean
};

const initialState: RegisterState = {
	error: null,
	isLoading: false
};

const registerReducer = (state: RegisterState = initialState, action: RegisterActions):
	RegisterState => {
	switch (action.type) {
	case REGISTER_START:
		return {...state, error: null, isLoading: true};

	case REGISTER_SUCCESSFULL:
		return {...state, isLoading: false, error: null};

	case REGISTER_ERROR:
		return {...state, error: action.error, isLoading: false};
	}

	return state;
};

export default registerReducer;
