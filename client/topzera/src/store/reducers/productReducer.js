import { createReducer } from "@reduxjs/toolkit";
import { addProductList } from "../actions/productActions";

const initialState = {
    productList: []
}

const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addProductList, (state, action) => {
            state.myProductsLikes = action.payload
        })
})

export default productReducer