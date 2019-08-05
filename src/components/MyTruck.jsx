import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import Card from './Card';

const ApplianceItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MyTruck = props => {
    let appliance = useSelector(state => state.appliance);
    const truck = useSelector(state => state.truck);

    return (
        <Card>
            <h3>My Food Truck</h3>
            <div>{truck.name ? truck.name : 'No truck'}</div>
            <ul>
                {appliance.map(e => (
                    <ApplianceItem key={e.id}>
                        <span>{e.name}</span>
                        <span>★☆☆☆☆</span>
                    </ApplianceItem>
                ))}
            </ul>
        </Card>
    );
};

export default MyTruck;
