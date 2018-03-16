import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';

import GameLoop from './game/components/GameLoop';

import Main from './components/Main';
import Navigation from './components/Navigation';
import PageHeader from './components/PageHeader';
import StatusBar from './components/StatusBar';
import Section from './components/Section';

import MarketPage from './market/components/MarketPage';
import SupplyStorePage from './supply/components/SupplyStorePage';

import './app/globalStyles';
import colors from './app/colors';

const App = props => {
    return (
        <ThemeProvider theme={colors}>
            <GameLoop>
                <PageHeader />
                <StatusBar />
                <Main>
                    <Section primary>
                        <Route exact path="/" component={MarketPage} />
                        <Route path="/market" component={MarketPage} />
                        <Route path="/supplies" component={SupplyStorePage} />
                    </Section>
                </Main>
            </GameLoop>
        </ThemeProvider>
    );
};

export default App;
