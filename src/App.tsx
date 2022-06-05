import React from 'react';
import {CustomWrapper} from './components/CustomWrapper';
import {AuthPassword} from './components/UI/auth/AuthPassword';
import {LoginContainer} from './pages/LoginContainer';
import {RegisterContainer} from './pages/RegisterContainer';

const App = () => {
    return (
        <CustomWrapper height={'100vh'}>
            {/*<LoginContainer/>*/}
            <RegisterContainer/>
        </CustomWrapper>
    );
};

export default App;