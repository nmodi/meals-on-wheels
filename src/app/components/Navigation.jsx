import React from 'react';
import styled from 'styled-components';

import NavLink from './NavLink';

const Nav = styled.nav `
    flex: 1; 
    padding: 10px 0 0 0; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`;

const Navigation = (props) => {
    return (
        <Nav>
            <NavLink to="/market">Farmer's Market</NavLink>
            <NavLink to="/supplies">Restaurant Supply</NavLink>
        </Nav>
    );
}

export default Navigation;