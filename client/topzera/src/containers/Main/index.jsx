import React, { memo } from "react";
import ProductPanel from "../ProductPanel";
import UserInfo from "../UserInfo";
import { useMainContext } from "./contexts";

function Main() {
    const [ userInfo, productList ] = useMainContext()

    const DisplayContent = () => {
        if (userInfo.email && productList.length) return <ProductPanel/>
        return <UserInfo />
    }

    return (
        <DisplayContent />
    )
    
}

export default memo(Main);