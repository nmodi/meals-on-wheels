import React from 'react';
import styled from 'styled-components';

import {NavLink} from 'react-router-dom';

const activeClassName = 'active-nav-link';

const Link = styled(NavLink).attrs({
    activeClassName
})`
    border-bottom: 2px solid transparent;
    display: block;
    color: ${props => props.theme.grayLighter};
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    font-weight: 600;

    &.active-nav-link {
        border-bottom: 2px solid ${props => props.theme.red};
    }

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }

    &:hover {
        background: ${props => props.theme.grayDark};
    }

    &:visited {
        color: ${props => props.theme.grayLighter};
    }
`;

const NavItem = (props) => {
    return (
        <Link to={props.to} activeClassName={activeClassName}>{props.children}</Link> 
    ); 
}
 
export default NavItem;