import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import colors from '../app/colors';

const NavLink = styled(Link)`
    border-bottom: 2px solid transparent;
    display: block; 
    color: ${colors.red};
    text-decoration: none;
    padding: 10px; 
    font-size: 20px; 
    font-weight: 600; 
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        border-bottom: 2px solid ${colors.red};
        color: ${colors.yellow};
    }

    &:visited {
        color: ${colors.red};
    }
`;

export default NavLink;