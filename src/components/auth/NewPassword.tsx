import React from 'react';
import styled from 'styled-components';
import {AuthPassword} from '../UI/auth/AuthPassword';
import {AuthButton} from '../UI/auth/AuthButton';

export const NewPassword = () => {
    return (
        <NewPasswordStyled>
            <h2 className={'title'}>It-incubator</h2>
            <h3 className={'title'}>Create new password</h3>
            <AuthPassword placeholder={'Password'} mb={'30px'}/>
            <p className={'instructions'}>Create new password and we will send you further instructions to email</p>
            <AuthButton>Create new password</AuthButton>
        </NewPasswordStyled>
    );
};

const NewPasswordStyled = styled.div`
  width: 413px;
  height: 480px;
  padding: 25px 33px;
  background: #F9F9FE;
  border-radius: 8px;
  text-align: center;

  .title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    color: #2D2E46;
  }

  .instructions {
    margin-bottom: 90px;
    font-family: 'SF UI Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2D2E46;
    opacity: 0.5;
  }

  h2 {
    margin-bottom: 32px;
    font-size: 26px;
    line-height: 39px;
  }

  h3 {
    margin-bottom: 57px;
    font-size: 22px;
    line-height: 33px;
  }
`

