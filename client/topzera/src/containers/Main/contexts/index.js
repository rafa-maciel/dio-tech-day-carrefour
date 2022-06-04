import { useEffect } from "react";
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
     * Effect calld by userInfo
     * If user info is in local storege but no in the redux store
     * it is going to add the info to redux store
     */
    useEffect(() => {
        if (hasUserInfoStored() && !userInfo.email) {
            var email = getEmailStored()
            var cep = getCEPStored()
            
            dispatch(addUserInfo({ email, cep }))
        }
    }, [ dispatch, userInfo ])

    /**
     * Effect called by userInfo updated
     * Check if product list is empty and search for products and likes if it is true
     */
    useEffect(() => {
        if (!productList.length && hasUserInfoStored()) {
            var email = getEmailStored()
            var cep = getCEPStored()


            dispatch(startLoadingAction('Pesquisando as melhores ofertas perto de você'))
            getProductsAndLikes(email, cep)
                .then(data => {
                    dispatch(addProductList(data.products))
                    dispatch(addLikedProductList(data.likes))
                    dispatch(stopLoadingAction())
                })
        }
    }, [ dispatch, productList, userInfo ])

    return [ userInfo, productList ]
}

export { useMainContext }