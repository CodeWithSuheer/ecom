// import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";


//API URL
const getAllProductsUrl = "https://fakestoreapi.com/products";
// const getAllProductsUrl = "https://api.escuelajs.co/api/v1/products";


// getProductAsync
export const getProductAsync = createAsyncThunk("products/getProduct", async () => {
    try {
        const response = await axios.get(getAllProductsUrl);
        console.log('response', response.data);
        return response.data;

    } catch (error) {
        console.log(error.response.data.msg);
        // toast.error(error.response.data.msg);
    }
});





// INITIAL STATE
const initialState = {
    loading: false,
    createProduct: null,
    products: [],
    updatedProduct: null,
    getProductById: null
};



const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ShowProductAsync
            .addCase(getProductAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProductAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })


    }
})


export default ProductSlice.reducer;

