import React, { memo } from "react";
import UserInfo from "../UserInfo";
import { useMainContext } from "./contexts";

function Main() {
    const [ userInfo ] = useMainContext()

    const DisplayContent = () => {
        if (userInfo.email) return <h1>Content from { userInfo.email }</h1>
        return <UserInfo />
    }

    return (
        <DisplayContent />
    )
    
}

export default memo(Main);