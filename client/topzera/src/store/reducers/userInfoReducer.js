import { createReducer } from "@reduxjs/toolkit";
import { addUserInfo } from "../actions/userInfoActions";

const initialState = {
    info: {
        email: '',
        cep: ''
    }
}

const userInfoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addUserInfo, (state, action) => {
            state.info = {
                ...state.info, 
                email: action.payload.email, 
                cep: action.payload.cep
            }
        })
})

export default userInfoReducer