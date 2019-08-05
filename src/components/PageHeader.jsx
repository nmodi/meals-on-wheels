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
    color: ${props => props.theme.main};
    align-items: center;
    background: ${props => props.theme.card};
    height: 45px;
    display: flex;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.08);
    border: 1px solid ${props => props.theme.greyAccent};
`;

const PageHeader = props => {
    return (
        <Header>
            <Hh>Street Eats</Hh>
        </Header>
    );
};

export default PageHeader;
