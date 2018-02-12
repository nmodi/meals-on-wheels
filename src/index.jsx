import React from 'react'; 
import ReactDOM from 'react-dom'; 
import styled from 'styled-components'; 
import {Helmet} from 'react-helmet'; 

import PageHeader from './containers/PageHeader'; 
import NavBar from './containers/NavBar'; 
import MarketSection from './containers/MarketSection'

import './assets/css/reset.scss'; 

const Main = styled.main`
    margin-top: 100px;
`; 

const App = props => {
    return (
        <div>
            <Helmet>
                <title>Meals on Wheels</title>    
            </Helmet> 
            <PageHeader />

            <Main>
                <NavBar /> 
                <MarketSection /> 

                {/**
                * children component should go here 
                */}
            </Main> 
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)