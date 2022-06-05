import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Routing';

export const NavBar = () => {
    return (
        <div>
            <div><NavLink to={PATH.PROFILE}>PROFILE</NavLink></div>
            <div><NavLink to={PATH.REGISTRATION}>REGISTRATION</NavLink></div>
            <div><NavLink to={PATH.LOGIN}>LOGIN</NavLink></div>
            <div><NavLink to={PATH.RECOVERY}>RECOVERY</NavLink></div>
            <div><NavLink to={PATH.PASSWORD}>PASSWORD</NavLink></div>
        </div>
    );
};

