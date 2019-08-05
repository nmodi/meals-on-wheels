import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';

import PageHeader from './components/PageHeader';
import MyTruck from './components/MyTruck';
import MyStats from './components/MyStats';

import store from './state/configureStore';

import './base.css';
import AllTrucks from './components/AllTrucks';
import EquipmentForSale from './components/EquipmentForSale';

const lightTheme = {
    main: '#c6313a',
    accent: '#f6da55',
    info: '#f2d851',
    default: '#999',
    success: '#719551',
    warning: '#ee8519',
    danger: '#f44336',

    background: '#eaeaf2',
    card: '#fff',
    greyAccent: '#e5e6ea',
    copy: '#181819'
};

const darkTheme = {
    main: '#f6da55',
    accent: '#c6313a',

    info: '#f2d851',

    default: '#999',
    success: '#719551',
    warning: '#ee8519',
    danger: '#f44336',

    background: '#181819',
    card: '#242426',
    greyAccent: '#3c3c3f',
    copy: '#eaeaf2'
};

const Body = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
`;

const Main = styled.div`
    background: ${props => props.theme.background};
    flex: auto;
    display: flex;

    justify-content: center;
`;

const GlobalStyle = createGlobalStyle`

    body {
        color: ${props => props.theme.copy};
    }
`;

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <div>
                    <GlobalStyle />
                    <Helmet>
                        <title>Street Eats</title>
                    </Helmet>
                    <Body>
                        <PageHeader />
                        <Main>
                            <div>
                                <MyTruck />
                            </div>
                            <div style={{flex: 2}}>
                                <AllTrucks />
                                <EquipmentForSale />
                            </div>
                            <div>
                                <MyStats />
                            </div>
                        </Main>
                    </Body>
                </div>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
