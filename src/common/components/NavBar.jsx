import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

const StyledLink = styled(Link)`
    display: block; 
    color: #D25E4E;
    text-decoration: none;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        color: #D25E4E;
    }

    &:visited {
        color: #D25E4E;
    }
`;

const Nav = styled.nav `
    backgroundColor: '#fff'
`;

const NavBar = (props) => {
    return (
        <Nav>
            <StyledLink to="/road">The Road</StyledLink>
            <StyledLink to="/events">Events</StyledLink>
            <StyledLink to="/market">Farmer's Market</StyledLink>
            <StyledLink to="/supplies">Restaurant Supply</StyledLink>
        </Nav>
    );
}

export default NavBar;