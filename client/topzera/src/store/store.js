import { configureStore  } from '@reduxjs/toolkit'
import likeReducer from './reducers/likeReducer'
import productReducer from './reducers/productReducer'
import userInfoReducer from './reducers/userInfoReducer'


const store = configureStore({
    reducer: {
        likes: likeReducer,
        products: productReducer,
        user: userInfoReducer
    }
})

export default store