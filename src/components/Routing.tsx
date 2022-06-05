import React from 'react';
import {Routes} from 'react-router-dom';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PASSWORD: '/password',
    PROFILE: '/profile',
    RECOVERY: '/recovery',
    TEST_PAGE: '/test_page',
}

export const Routing = () => {
    return (
        <>
            <Routes>
                {/*<Route path={'/'} element={<ProfileContainer/>}/>*/}
                {/*<Route path={PATH.LOGIN} element={<LoginContainer/>}/>*/}
                {/*<Route path={PATH.REGISTRATION} element={<RegistrationContainer/>}/>*/}
                {/*<Route path={PATH.PASSWORD} element={<PasswordContainer/>}/>*/}
                {/*<Route path={PATH.RECOVERY} element={<RecoveryContainer/>}/>*/}
                {/*<Route path={PATH.TEST_PAGE} element={<TestPage/>}/>*/}
                {/*<Route path={'/*'} element={<ErrorPage/>}/>*/}
            </Routes>
        </>
    );
};

