import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import Card from './Card';

const EquipmentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MyTruck = props => {
    let equipment = useSelector(state => state.equipment);
    const truck = useSelector(state => state.truck);

    console.log(truck);
    console.log(equipment);

    return (
        <Card>
            <h3>My Food Truck</h3>
            <div>{truck.name ? truck.name : 'No truck'}</div>
            <ul>
                {equipment.map(e => (
                    <EquipmentItem key={e.id}>
                        <span>{e.name}</span>
                        <span>★☆☆☆☆</span>
                    </EquipmentItem>
                ))}
            </ul>
        </Card>
    );
};

export default MyTruck;
