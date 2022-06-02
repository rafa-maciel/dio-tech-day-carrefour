import { USER_CEP_KEY, USER_EMAIL_KEY } from "../commons/constants/storekeys"

const storeUserInfo = (info) => {
    var { email, cep } = info

    localStorage.setItem(USER_EMAIL_KEY, email)
    localStorage.setItem(USER_CEP_KEY, cep)
}

const getEmailStored = () => {
    return localStorage.getItem(USER_EMAIL_KEY);
}

const getCEPStored = () => {
    return localStorage.getItem(USER_CEP_KEY);
}

const hasUserInfoStored = () => {
    return localStorage.length && getEmailStored()
}

export {
    storeUserInfo,
    getEmailStored,
    getCEPStored,
    hasUserInfoStored
}