import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';

import PageHeader from './components/PageHeader';
import MyTruck from './components/MyTruck';
import MyStats from './components/MyStats';
import AllTrucks from './components/AllTrucks';
import AppliancesForSale from './components/AppliancesForSale';

import store from './state/configureStore';

import './base.css';
import themes from './themes';
import Junkyard from './components/Junkyard';
import RecipeStore from './components/RecipeStore';

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
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') || 'light'
    );

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    console.log(theme);

    return (
        <Provider store={store}>
            <ThemeProvider theme={themes[theme]}>
                <div style={{position: 'relative'}}>
                    <GlobalStyle />
                    <Helmet>
                        <title>Street Eats</title>
                    </Helmet>
                    <Body>
                        <PageHeader setTheme={setTheme} />
                        <Main>
                            <div style={{flex: 2}}>
                                <AllTrucks />
                                <AppliancesForSale />
                                {/* TODO make a component for adding recipes to your truck */}
                            </div>
                            <div style={{flex: 3}}>
                                <MyTruck />
                                <Junkyard />
                            </div>
                            <div style={{flex: 2}}>
                                <MyStats />
                                <RecipeStore />
                            </div>
                        </Main>
                    </Body>
                </div>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
