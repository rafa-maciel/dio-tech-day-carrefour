import { createReducer } from "@reduxjs/toolkit";
import { orderProductsByLikes } from "../../services/userInfoService";
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
            let list = state.productList.map((product) => {
                if (product.id === action.payload) {
                    return {...product, totalLikes: ++product.totalLikes, likedByUser: true }
                }
                return product
            })

            state.productList = orderProductsByLikes(list)
        })
})

export default productReducer