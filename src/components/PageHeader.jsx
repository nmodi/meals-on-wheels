import React from 'react';
import styled from 'styled-components';

import colors from '../app/colors';

const Hh = styled.h1 `
    font-family: 'Lobster', cursive;
    margin-left: 15%; 
    font-size: 36px; 
`;

const Header = styled.header `
    position: absolute; 
    left: 0; 
    top: 0; 
    width: 100%; 
    background: ${colors.grayDarker}; 
    height: 65px;
    color: #eee; 
    padding: 10px; 
`;

const PageHeader = props => {
    return (
        <Header>
            <Hh>Meals on Wheels</Hh>
        </Header>
    );
};

export default PageHeader;