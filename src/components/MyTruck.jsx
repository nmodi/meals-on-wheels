import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import Card from './Card';

const ApplianceItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MyTruck = () => {
    let appliances = useSelector(state => state.appliances);
    const truck = useSelector(state => state.truck);

    return (
        <Card>
            <h3>My Food Truck</h3>
            <div>{truck.name ? truck.name : 'No truck'}</div>
            <ul>
                {appliances.map(a => (
                    <ApplianceItem key={a.name}>
                        <span>{a.name}</span>
                        <span>
                            {[...Array(a.rating)].map(() => '★')}
                            {[...Array(5 - a.rating)].map(() => '☆')}
                        </span>
                    </ApplianceItem>
                ))}
            </ul>
        </Card>
    );
};

export default MyTruck;
