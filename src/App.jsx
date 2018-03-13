import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import GameLoop from './game/components/GameLoop';

import Main from './components/Main';
import Navigation from './components/Navigation';
import PageHeader from './components/PageHeader';
import StatusBar from './components/StatusBar';
import Section from './components/Section';

import MarketPage from './market/components/MarketPage';
import SupplyStorePage from './supply/components/SupplyStorePage';

import './app/globalStyles';

const App = props => {
    return (
        <GameLoop>
            <PageHeader />
            <StatusBar />
            <Main>
                <Navigation />
                <Section primary>
                    <Route exact path="/" component={MarketPage} />
                    <Route path="/market" component={MarketPage} />
                    <Route path="/supplies" component={SupplyStorePage} />
                </Section>
            </Main>
        </GameLoop>
    );
};

export default App;
