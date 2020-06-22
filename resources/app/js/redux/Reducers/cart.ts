//My components
import {ICartItem} from '../../Interfaces/ICartItem';
import * as actionCreators from '../Actions/cartActions';


type InferValuesType<T> = T extends {[key: string]: infer U} ? U : never;
type CartActions = ReturnType<InferValuesType<typeof actionCreators>>;

export type CartState = Array<ICartItem>;

const initialState: CartState = [];

const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
	console.log(1);
	return state;
};

export default cartReducer;
