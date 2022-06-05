import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

interface IAuthButton {
    width?: string
    mb?: string
}

export const AuthButton = styled(Button)<IAuthButton>`
  && {
    height: 36px;
    width: ${props => props.width || '266px'};
    margin-bottom: ${props => props.mb || '5px'};
    text-transform: none;
    font-family: 'SF UI Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #ECECF9;
    background: #21268F;
    box-shadow: 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
    border-radius: 30px;

    &:hover {
      background: #000035
    }
  }
`




