import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Helmet from 'react-helmet';

import PageHeader from './components/PageHeader';
import MyTruck from './components/MyTruck';

import './base.css';
import MyStats from './components/MyStats';

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

const App = props => {
    return (
        <div>
            <Helmet>
                <title>Street Eats</title>
            </Helmet>
            <Body>
                <PageHeader />
                <Main>
                    <MyTruck />
                    <MyStats />
                </Main>
            </Body>
        </div>
    );
};

export default App;
