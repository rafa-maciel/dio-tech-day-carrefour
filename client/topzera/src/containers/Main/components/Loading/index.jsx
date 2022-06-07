import React, {memo} from "react";
import { useSelector } from "react-redux";
import { LinearProgress } from '../../../../components'
import { LoadingLabel, LoadingPanelStyled, LoadingScreenStyled } from "./style";

function Loading() {
    const { onLoad, label } = useSelector((state) => state.loading)

    const OnLoading = () => {
        if (onLoad) return (
            <LoadingScreenStyled>
                <LoadingPanelStyled>
                    <LoadingLabel variant="div">{label}</LoadingLabel>
                    <LinearProgress />
                </LoadingPanelStyled>
            </LoadingScreenStyled>
        )
    }

    return <OnLoading />
}

export default memo(Loading)