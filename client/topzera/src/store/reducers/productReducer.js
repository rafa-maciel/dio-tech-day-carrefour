import { createReducer } from "@reduxjs/toolkit";
import { addProductList, incrementLikeToProduct } from "../actions/productActions";

const initialState = {
    productList: []
}

const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addProductList, (state, action) => {
            state.productList = action.payload
        })
        .addCase(incrementLikeToProduct, (state, action) => {
            state.productList = state.productList.map((product) => {
                if (product.id === action.payload) {
                    return {...product, totalLikes: ++product.totalLikes}
                }
                return product
            })
        })
})

export default productReducer