import { configureStore  } from '@reduxjs/toolkit'
import likeReducer from './reducers/likeReducer'
import loadingReducer from './reducers/loadingReducer'
import productReducer from './reducers/productReducer'
import userInfoReducer from './reducers/userInfoReducer'


const store = configureStore({
    reducer: {
        likes: likeReducer,
        products: productReducer,
        user: userInfoReducer,
        loading: loadingReducer
    }
})

export default store