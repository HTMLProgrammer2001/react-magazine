//My components
import * as actionCreators from './actions';
import {APP_INITIALIZED} from './types';
import {InferActionTypes} from '../../index';


//Action creators type
export type AppActions = InferActionTypes<typeof actionCreators>;

//App state type
export type AppState = {
	initialized: boolean
};

const initialState: AppState = {
	initialized: false
};

//Reducer
const appReducer = (state: AppState = initialState, action: AppActions): AppState => {
	switch (action.type) {
	case APP_INITIALIZED:
		return {initialized: true};
	}

	return state;
};

export default appReducer;
