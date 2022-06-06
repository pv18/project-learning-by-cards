import React from 'react';
import {CustomWrapper} from './components/CustomWrapper';
import {NavBar} from './components/NavBar';
import {Routing} from './components/Routing';

const App = () => {
    return (
        <>
            <NavBar/>
            <CustomWrapper height={'100vh'}>
                <Routing/>
            </CustomWrapper>
        </>

    );
};

export default App;