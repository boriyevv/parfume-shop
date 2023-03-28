import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addProduct, removeProduct, totalCount } from "./product-slice";
import { addWish, removeWish, totalLike } from "./wishes-slice";
import productSlice from "./product-slice";
import wishSlice from "./wishes-slice";

const productMiddleware = createListenerMiddleware()
const wishesMiddleware = createListenerMiddleware()

productMiddleware.startListening({
    matcher: isAnyOf(addProduct, removeProduct),
    effect: (_, api) => {
        api.dispatch(totalCount())
    }
})

wishesMiddleware.startListening({
    matcher: isAnyOf(addWish, removeWish),
    effect: (_, api) => {
        api.dispatch(totalLike())
    }
})

export const store = configureStore({
    reducer: {
        product: productSlice,
// 
        wishProduct: wishSlice,
    },
    // reducer: {

    // },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productMiddleware.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wishesMiddleware.middleware),
});

