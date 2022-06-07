import React, { memo } from "react";
import ProductPanel from "../ProductPanel";
import UserInfo from "../UserInfo";
import Loading from "./components/Loading";
import { useMainContext } from "./contexts";

function Main() {
    const [ userInfo, productList ] = useMainContext()

    const DisplayContent = () => {
        if (userInfo.email && productList.length) return <ProductPanel/>
        return (
            <UserInfo />
        )
    }

    return (
        <>
            <DisplayContent />
            <Loading />
        </>
    )
    
}

export default memo(Main);