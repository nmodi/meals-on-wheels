import React from 'react';
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components';

import Main from './app/components/Main';
import Navigation from './app/components/Navigation';
import PageHeader from './app/components/PageHeader';
import StatusBar from './app/components/StatusBar';
import Section from './app/components/Section'

import MarketPage from './market/components/MarketPage';

import SupplyStorePage from './supply/components/SupplyStorePage';

import './app/globalStyles';

const App = props => {
    return (
        <div>
            <PageHeader/>
            <Main>
                <Navigation/>
                <Section primary>
                    <Route exact path='/' component={MarketPage}/>
                    <Route path='/market' component={MarketPage}/>
                    <Route path='/supplies' component={SupplyStorePage}/>
                </Section>
            </Main>
        </div>
    );
};

export default App;