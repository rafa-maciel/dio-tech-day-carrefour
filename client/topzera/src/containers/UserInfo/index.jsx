import React, { memo, useState } from "react";
import { storeUserInfo } from "../../services/storageService";
import UserForm from "./components/UserForm";
import { ContentContainerStyled, HeaderContainerStyled, InfoStyled, MainContainer, SubtitleStyled, TitleStyled } from "./style";

function UserInfo({ onGetUserInformation }) {
    const [info, setInfo] = useState({ 'email': null, 'cep': null })

    const addUserInfo = () => {
        storeUserInfo(info)
        onGetUserInformation()
    }

    return (
        <MainContainer>
            <HeaderContainerStyled>
                <TitleStyled variant="h2" component="h1">Topzera</TitleStyled>
                <SubtitleStyled component="span">Carrefour</SubtitleStyled>
                <InfoStyled variant="div" component="p">Entre com o seus dados para encontrarmos as melhores ofertas para você</InfoStyled>
            </HeaderContainerStyled>
            

            <ContentContainerStyled>
                <UserForm 
                    onFormSubmit={addUserInfo} 
                    onValueChange={(name, value) => setInfo({...info, [name]: value})}
                    />
            </ContentContainerStyled>
        </MainContainer>
    )

}

export default memo(UserInfo)