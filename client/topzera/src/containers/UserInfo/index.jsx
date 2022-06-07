import React, { memo, useState } from "react";
import { storeUserInfo } from "../../services/storageService";
import UserForm from "./components/UserForm";
import { ContentContainerStyled, InfoStyled, MainContainer } from "./style";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../store/actions/userInfoActions";
import MainHeader from "../../components/MainHeader";

function UserInfo() {
    const [info, setInfo] = useState({ 'email': null, 'cep': null })
    const dispatch = useDispatch()

    const updateUserInfo = () => {
        storeUserInfo(info)
        dispatch(addUserInfo(info))
    }

    return (
        <MainContainer>
            <MainHeader>
                <InfoStyled variant="div" component="p">Entre com o seus dados para encontrarmos as melhores ofertas para você</InfoStyled>
            </MainHeader>            

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