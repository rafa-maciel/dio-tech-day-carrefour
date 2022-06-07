import React, {memo} from "react";
import { HeaderContainerStyled, SubtitleStyled, TitleStyled } from "./style";

function MainHeader({ children }) {

    return (
        <HeaderContainerStyled>
            <TitleStyled variant="h2" component="h1">Topzera</TitleStyled>
            <SubtitleStyled component="span">Carrefour</SubtitleStyled>
            { children }
        </HeaderContainerStyled>
    )
}

export default memo(MainHeader);