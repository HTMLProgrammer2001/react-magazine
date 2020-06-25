import { CATEGORY_LOAD_START, CATEGORY_LOAD_ERROR, CATEGORY_LOAD_SUCCESS } from '../actionTypes';
export var categoryLoadStart = function () { return ({
    type: CATEGORY_LOAD_START
}); };
export var categoryLoadSuccess = function (payload) { return ({
    type: CATEGORY_LOAD_SUCCESS,
    payload: payload
}); };
export var categoryLoadFailure = function (error) { return ({
    type: CATEGORY_LOAD_ERROR,
    error: error
}); };
//# sourceMappingURL=categoryActions.js.map