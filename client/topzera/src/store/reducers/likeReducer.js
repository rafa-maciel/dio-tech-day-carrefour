import { createReducer } from "@reduxjs/toolkit";
import { addLikedProduct, deleteLikedProduct } from "../actions/likeActions";

const initialState = {
    myProductsLikes: []
}

const likeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addLikedProduct, (state, action) => {
            state.myProductsLikes.push(action.payload)
        })
        .addCase(deleteLikedProduct, (state, action) => {
            state.myProductsLikes = state.myProductsLikes.filter((product) => product.id !== action.payload.id)
        })
})

export default likeReducer