import { createReducer } from "@reduxjs/toolkit";
import { startLoadingAction, stopLoadingAction, updateLoadingLabelAction } from "../actions/loadingActions";

const initialState = {
    onLoad: false,
    label: ''
}

const loadingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(startLoadingAction, (state, action) => {
            state.onLoad = true
            state.label = action.payload

        })
        .addCase(updateLoadingLabelAction, (state, action) => {
            state.label = action.payload
        })
        .addCase(stopLoadingAction, (state, action) => {
            state.onLoad = false
            state.label = ''
        })
})

export default loadingReducer