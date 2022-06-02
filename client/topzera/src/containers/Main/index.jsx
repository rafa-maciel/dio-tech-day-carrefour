import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { hasUserInfoStored, getCEPStored, getEmailStored } from "../../services/storageService";
import UserInfo from "../UserInfo";
import { useDispatch } from 'react-redux'
import { addUserInfo } from "../../store/actions/userInfoActions";

function Main() {
    const userInfo = useSelector((state) => state.user.info)
    const dispatch = useDispatch()

    useEffect(() => { 
        if (hasUserInfoStored()) {
            var email = getEmailStored()
            var cep = getCEPStored()

            dispatch(addUserInfo({ email, cep }))
        }
     }, [ dispatch ])

    const DisplayContent = () => {
        if (userInfo.email) return <h1>Content from { userInfo.email }</h1>

        return <UserInfo />
    }

    return (
        <DisplayContent />
    )
    
}

export default memo(Main);