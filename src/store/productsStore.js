import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../reducers/productsReducer";

const productStore = configureStore({
    reducer: productReducer
});

export default productStore;
