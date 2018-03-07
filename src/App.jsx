import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {actions} from './app/appReducer';

import Main from './app/components/Main';
import Navigation from './app/components/Navigation';
import PageHeader from './app/components/PageHeader';
import StatusBar from './app/components/StatusBar';
import Section from './app/components/Section';

import MarketPage from './market/components/MarketPage';

import SupplyStorePage from './supply/components/SupplyStorePage';

import './app/globalStyles';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.props.dispatch(actions.tick());
    }

    render() {
        return (
            <div>
                <PageHeader />
                <Main>
                    <Navigation />
                    <Section primary>
                        <Route exact path="/" component={MarketPage} />
                        <Route path="/market" component={MarketPage} />
                        <Route path="/supplies" component={SupplyStorePage} />
                    </Section>
                </Main>
            </div>
        );
    }
}

export default connect(null)(App);
