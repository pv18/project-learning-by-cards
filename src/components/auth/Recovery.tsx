import React from 'react';
import styled from 'styled-components';
import {AuthInput} from '../UI/auth/AuthInput';
import {AuthButton} from '../UI/auth/AuthButton';

export const Recovery = () => {
    return (
        <RecoveryStyled>
            <h2 className={'title'}>It-incubator</h2>
            <h3 className={'title'}>Forgot your password?</h3>
            <AuthInput variant={'standard'}
                       fullWidth
                       label={'Email'}
                       mb={'30px'}
            />
            <p className={'instructions mb90'}>Enter your email address and we will send you further instructions</p>
            <AuthButton mb={'30px'}>Send Instructions</AuthButton>
            <p className={'instructions'}>Did you remember your password?</p>
            <h4>Try logging in</h4>
        </RecoveryStyled>
    );
};

const RecoveryStyled = styled.div`
  width: 413px;
  height: 540px;
  padding: 25px 33px 31px;
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
    margin-bottom: 11px;
    font-family: 'SF UI Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2D2E46;
    opacity: 0.5;
  }
  
  .mb90 {
    margin-bottom: 90px;
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

  h4 {
    font-family: 'SF UI Display', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #21268F;
  }
`

