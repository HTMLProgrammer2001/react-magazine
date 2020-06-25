import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cartReducer from './cart';
import categoryReducer from './category';
var storeReducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    form: formReducer
});
export default storeReducer;
//# sourceMappingURL=index.js.map