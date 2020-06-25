declare const storeReducer: import("redux").Reducer<import("redux").CombinedState<{
    cart: import("./cart").CartState;
    category: import("./category").CategoryState;
    form: import("redux-form").FormStateMap;
}>, import("redux").AnyAction>;
export declare type RootState = ReturnType<typeof storeReducer>;
export default storeReducer;
