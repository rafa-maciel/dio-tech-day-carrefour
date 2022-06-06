import { LinearProgress } from "@mui/material";
import React, { memo } from "react";
import ProductPanel from "../ProductPanel";
import UserInfo from "../UserInfo";
import { useMainContext } from "./contexts";

function Main() {
    const [ userInfo, productList, onLoading ] = useMainContext()

    const LoadingProgress = () => {
        if (onLoading) return <LinearProgress />
    }

    const DisplayContent = () => {
        if (userInfo.email && productList.length) return <ProductPanel/>
        return (
            <UserInfo />
        )
    }

    return (
        <>
            <DisplayContent />
            <LoadingProgress />
        </>
    )
    
}

export default memo(Main);