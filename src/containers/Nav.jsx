import React from 'react'; 

import NavLink from '../components/NavLink'; 

const Nav = (props) => {
    return (
        <nav>
            <NavLink href="#link">The Road</NavLink>
            <NavLink href="#link">Events</NavLink>
            <NavLink href="#link">Farmer's Market</NavLink>
            <NavLink href="#link">Restaurant Supply</NavLink>
        </nav>
    );
}

export default Nav; 