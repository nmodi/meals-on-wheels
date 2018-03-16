import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const Hh = styled.h1`
    font-family: 'Lobster', cursive;
    font-size: 36px;
`;

const Header = styled.header`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: ${props => props.theme.grayDarker};
    height: 65px;
    color: #eee;
    padding: 10px 15%;
    display: flex; 
    justify-content: space-between;
`;

const PageHeader = props => {
    return (
        <Header>
            <Hh>Meals on Wheels</Hh>
            <Navigation />
        </Header>
    );
};

export default PageHeader;
