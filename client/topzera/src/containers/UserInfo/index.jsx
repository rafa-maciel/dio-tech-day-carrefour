import React, { memo, useState } from "react";
import { storeUserInfo } from "../../services/storageService";
import UserForm from "./components/UserForm";
import { ContentContainerStyled, HeaderContainerStyled, InfoStyled, MainContainer, SubtitleStyled, TitleStyled } from "./style";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../store/actions/userInfoActions";

function UserInfo() {
    const [info, setInfo] = useState({ 'email': null, 'cep': null })
    const dispatch = useDispatch()

    const updateUserInfo = () => {
        storeUserInfo(info)
        dispatch(addUserInfo(info))
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
                    onFormSubmit={updateUserInfo} 
                    onValueChange={(name, value) => setInfo({...info, [name]: value})}
                    />
            </ContentContainerStyled>
        </MainContainer>
    )

}

export default memo(UserInfo)