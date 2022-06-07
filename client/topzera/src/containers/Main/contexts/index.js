import { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCEPStored, getEmailStored, hasUserInfoStored } from "../../../services/storageService";
import { getProductsAndLikes } from "../../../services/userInfoService";
import { addLikedProductList } from "../../../store/actions/likeActions";
import { startLoadingAction, stopLoadingAction } from "../../../store/actions/loadingActions";
import { addProductList } from "../../../store/actions/productActions";
import { addUserInfo } from "../../../store/actions/userInfoActions";

function useMainContext() {
    const userInfo = useSelector((state) => state.user.info)
    const productList = useSelector((state) => state.products.productList, shallowEqual)
    const dispatch = useDispatch()
    
    /**
     * Find and dipatch to store
     * a list of product and the user email likes
     */
    const updateProductsAndLikes = useCallback(() => {
        const { email, cep } = userInfo

        if (!productList.length && cep) {
            dispatch(startLoadingAction('Buscando as melhores ofertas proximas a você...'))
            getProductsAndLikes(email, cep)
                .then(data => {
                    dispatch(addProductList(data.products))
                    dispatch(addLikedProductList(data.likes))
                    dispatch(stopLoadingAction())
                })
        }
    }, [ dispatch, productList, userInfo ])

    const updateUserInfo = useCallback(() => {
        if (hasUserInfoStored() && !userInfo.email) {
            dispatch(startLoadingAction('Validando seus dados..'))
            var email = getEmailStored()
            var cep = getCEPStored()
            dispatch(addUserInfo({ email, cep }))
            dispatch(stopLoadingAction())
        }
    }, [dispatch, userInfo])


    /**
     * Effect will be called on the first render
     * If user info is in local storege but not in the redux store
     * it is going to add the user info, likes and products to redux store
     */
    useEffect(() => {
        updateUserInfo()
        updateProductsAndLikes()
    }, [ updateUserInfo, updateProductsAndLikes, dispatch ])
   

    return [ userInfo, productList ]
}

export { useMainContext }