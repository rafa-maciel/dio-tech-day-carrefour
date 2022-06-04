import { createReducer } from "@reduxjs/toolkit";
import { startLoadingAction, stopLoadingAction, updateLoadingLabelAction } from "../actions/loadingActions";

const initialState = {
    onLoad: false,
    loadTitle: ''
}

const loadingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(startLoadingAction, (state, action) => {
            console.log(`loading started with label {action.payload}`)
            state = {
                onLoad: true,
                loadTitle: action.payload
            }
        })
        .addCase(updateLoadingLabelAction, (state, action) => {
            state.loadTitle = action.payload
        })
        .addCase(stopLoadingAction, (state, action) => {
            console.log(`loading stoped`)
            state = initialState
        })
})

export default loadingReducer