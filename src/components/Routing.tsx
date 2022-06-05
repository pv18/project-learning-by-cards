import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {RegisterContainer} from '../pages/RegisterContainer';
import {LoginContainer} from '../pages/LoginContainer';
import {RecoveryContainer} from '../pages/RecoveryContainer';
import {NewPasswordContainer} from '../pages/NewPasswordContainer';

export const PATH = {
    PROFILE: '/profile',
    REGISTRATION: '/registration',
    LOGIN: '/login',
    PASSWORD: '/password',
    RECOVERY: '/recovery',
}

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.PROFILE} element={<h1>PROFILE</h1>}/>
                <Route path={PATH.REGISTRATION} element={<RegisterContainer/>}/>
                <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
                <Route path={PATH.RECOVERY} element={<RecoveryContainer/>}/>
                <Route path={PATH.PASSWORD} element={<NewPasswordContainer/>}/>
                <Route path={'/*'} element={<h1>404</h1>}/>
            </Routes>
        </>
    );
};

