import React from 'react';
import {AuthInput} from '../UI/auth/AuthInput';
import {AuthPassword} from '../UI/auth/AuthPassword';
import styled from 'styled-components';
import {AuthButton} from '../UI/auth/AuthButton';

export const Register = () => {
    return (
        <RegisterStyled>
            <h2 className={'title'}>It-incubator</h2>
            <h3 className={'title'}>Sign In</h3>
            <AuthInput variant={'standard'}
                       fullWidth
                       label={'Email'}
            />
            <AuthPassword placeholder={'Password'}/>
            <AuthPassword placeholder={'Confirm password'} mb={'84px'}/>
            <AuthButton width={'187px'}>Register</AuthButton>
        </RegisterStyled>
    );
};

const RegisterStyled = styled.div`
  width: 413px;
  height: 540px;
  padding: 25px 33px 60px;
  background: #F9F9FE;
  border-radius: 8px;
  text-align: center;

  .title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    color: #2D2E46;
  }

  h2 {
    margin-bottom: 32px;
    font-size: 26px;
    line-height: 39px;
  }

  h3 {
    margin-bottom: 38px;
    font-size: 22px;
    line-height: 33px;
  }
`

