import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const AuthAPI = {
    setLogin(data: LoginPayloadType) {
        return instance.post<LoginResponseType>(`auth/login`, data)
    }
}

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
// количество колод
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // подтвердил ли почту
    rememberMe: boolean
    error?: string
}