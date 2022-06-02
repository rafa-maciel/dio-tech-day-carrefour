import React, { memo, useEffect, useState } from "react";
import { hasUserInfoStored } from "../../services/storageService";
import UserInfo from "../UserInfo";

function Main() {
    const[hasUserInfo, setHasUserInfo] = useState(false)

    useEffect(() => {
        if (hasUserInfoStored()) setHasUserInfo(true)
    }, [ hasUserInfo ])

    const DisplayContent = () => {
        if (hasUserInfo) return <h1>Content</h1>

        return <UserInfo onGetUserInformation={() => setHasUserInfo(true)}/>
    }

    return (
        <DisplayContent />
    )
    
}

export default memo(Main);