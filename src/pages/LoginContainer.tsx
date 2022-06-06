import React, {useEffect} from 'react';
import {Login} from '../components/auth/Login';
import {AuthAPI} from '../API/api';

export const LoginContainer = () => {

    useEffect(() => {
        AuthAPI.setLogin({
            email: 'pv9998286620@yandex.ru',
            password: 'wwww8888',
            rememberMe: false
        }).then(res => {
            console.log(res)
        })
    }, [])

    return (
        <div>
            <Login/>
        </div>
    );
};

