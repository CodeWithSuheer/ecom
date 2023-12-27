import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/ProductSlice";
import ActionsSlice from "../features/ActionsSlice";

export const store = configureStore({
    reducer: {
        product: ProductSlice,
        action: ActionsSlice
    },
});