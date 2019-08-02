import React from 'react';
import styled from 'styled-components';

const Hh = styled.h1`
    font-size: 28px;
    width: 100%;
    margin-left: 45px;
    font-weight: 700;
    text-transform: uppercase;
`;

const Header = styled.header`
    color: ${props => props.theme.accent};
    align-items: center;
    background: ${props => props.theme.main};
    height: 45px;
    display: flex;
`;

const PageHeader = props => {
    return (
        <Header>
            <Hh>Street Eats</Hh>
        </Header>
    );
};

export default PageHeader;
