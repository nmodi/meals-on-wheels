import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';

import PageHeader from './components/PageHeader';
import MyTruck from './components/MyTruck';
import MyStats from './components/MyStats';

import store from './state/configureStore'; 

import './base.css';
import AllTrucks from './components/AllTrucks';

const Body = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
`;

const Main = styled.div`
    background: #f4f4f8;
    flex: auto;
`;

const theme = {
    main: '#c6313a',
    accent: '#f6da55',
    info: '#f2d851',
    default: '#999',
    success: '#719551',
    warning: '#ee8519',
    danger: '#f44336'
};

const App = props => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div>
                    <Helmet>
                        <title>Street Eats</title>
                    </Helmet>
                    <Body>
                        <PageHeader />
                        <Main>
                            <MyTruck />
                            <MyStats />
                            <AllTrucks />
                        </Main>
                    </Body>
                </div>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
