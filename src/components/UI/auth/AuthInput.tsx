import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

interface IAuthInput {
    mb?: string
}

export const AuthInput = styled(TextField)<IAuthInput>`
  && {
    margin-bottom: ${props => props.mb || '10px'};

    input {
      font-family: 'SF UI Display', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #2D2E46;
    }

    & label.Mui-focused {
      color: #21268F;
    }

    & .MuiInput-underline:after {
      border-bottom-color: #21268F;
    }
  }
`


