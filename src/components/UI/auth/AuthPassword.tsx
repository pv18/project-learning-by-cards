import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import styled from 'styled-components';

interface IAuthPassword {
    placeholder?: string
    mb?: string
}

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

export const AuthPassword: React.FC<IAuthPassword> = (props) => {
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({...values, [prop]: event.target.value});
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <FormControlStyled variant="standard" fullWidth mb={props.mb}>
            <InputLabel htmlFor="standard-adornment-password">{props.placeholder}</InputLabel>
            <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControlStyled>
    );
}

const FormControlStyled = styled(FormControl)<IAuthPassword>`
  && {
    margin-bottom: ${props => props.mb || '10px'};

    & label.Mui-focused {
      color: #21268F;
    }

    & .MuiInput-underline:after {
      border-bottom-color: #21268F;
    }
  }
`
