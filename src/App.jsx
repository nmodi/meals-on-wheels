import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import { Switch, Route } from 'react-router-dom'

import './common/globalStyles';

import Main from './common/components/Main';
import NavBar from './common/components/NavBar';
import PageHeader from './common/components/PageHeader';

import MarketPage from './market/components/MarketPage';
import SupplyStorePage from './supply/components/SupplyStorePage';

const App = props => {
    return (
        <div>
            <Helmet>
                <title>Meals on Wheels</title>
            </Helmet>
            <PageHeader/>

            <Main>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={MarketPage}/>
                    <Route path='/market' component={MarketPage}/>
                    <Route path='/supplies' component={SupplyStorePage}/>
                </Switch>
            </Main>
        </div>
    );
};

export default App;