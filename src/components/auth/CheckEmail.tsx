import React from 'react';
import email from '../../assets/img/email.svg';
import styled from 'styled-components';

export const CheckEmail = () => {
    return (
        <CheckEmailStyled>
            <h2 className={'title'}>It-incubator</h2>
            <img src={email} alt="Email"/>
            <h3 className={'title'}>Check Email</h3>
            <p className={'instructions'}>We’ve sent an Email with instructions to example@mail.com</p>
        </CheckEmailStyled>
    );
};

const CheckEmailStyled = styled.div`
  width: 413px;
  height: 468px;
  padding: 22px 43px;
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
  
  h2 {
    margin-bottom: 35px;
    font-size: 26px;
    line-height: 39px;
  }

  h3 {
    margin-top: 24px;
    margin-bottom: 21px;
    font-size: 26px;
    line-height: 39px;
  }
`

