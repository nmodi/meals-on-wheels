import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';

const ListItem = styled.li`
    display: flex;
	align-items: center;
    justify-content: space-between; 
    width: 150px; 
    margin: 8px; 
`;

const MarketListItem = props => {
    return (
        <ListItem>
            {props.ingredient.name} ({props.ingredient.quantity})<Button onClick={props.onClick}>Buy</Button>
        </ListItem>
    );
};

export default MarketListItem;
