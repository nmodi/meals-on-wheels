import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

const Nav = styled.nav `
    display: flex; 
    flex-direction: row; 
    align-items: center; 
`;

const Navigation = (props) => {
    return (
        <Nav>
            <NavItem to="/market">Farmer's Market</NavItem>
            <NavItem to="/supplies">Restaurant Supply</NavItem>
        </Nav>
    );
}
    
export default Navigation;