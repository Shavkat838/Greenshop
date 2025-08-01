import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import createSagaMiddleware from "redux-saga";
import productSlice from "./slices/productSlice";
import rootSaga from "./saga/rootSaga";
import cartSlice from "./slices/cartSlice"
import userSlice from "./slices/userSlice"
import likeSlice from "./slices/likesSlice"
import orderSlice from "./slices/orderSlice"

const mysagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    category: categorySlice,
    productsSlice: productSlice,
    carts:cartSlice,
    users:userSlice,
    like:likeSlice,
    orders:orderSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mysagaMiddleware),
});

mysagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
