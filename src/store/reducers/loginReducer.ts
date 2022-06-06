import {LoginResponseType} from '../../API/api';

type InitialStateType = {
    userData: LoginResponseType
}

const initialState: InitialStateType = {
    userData: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,
        error: '',
    }
}

export const loginReducer = () => {

}

// export const setLoginAC