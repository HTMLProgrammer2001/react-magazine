//My components
import * as actionCreators from '../../Actions/appActions';
import {APP_INITIALIZED} from '../../actionTypes';
import {InferActionTypes} from '../index';


export type AppActions = InferActionTypes<typeof actionCreators>;

export type AppState = {
	initialized: boolean
};

const initialState: AppState = {
	initialized: false
};

const appReducer = (state: AppState = initialState, action: AppActions): AppState => {
	switch (action.type) {
	case APP_INITIALIZED:
		return {initialized: true};
	}

	return state;
};

export default appReducer;
