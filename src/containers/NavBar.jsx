import React from 'react'; 
import styled from 'styled-components'; 

const NavLink = styled.a`
    display: block; 
`;

const Nav = styled.nav``; 

const NavBar = (props) => {
    return (
        <Nav>
            <NavLink href="#link">The Road</NavLink>
            <NavLink href="#link">Events</NavLink>
            <NavLink href="#link">Farmer's Market</NavLink>
            <NavLink href="#link">Restaurant Supply</NavLink>
        </Nav>
    );
}

export default NavBar; 