import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const EquipmentItem = styled.li`
    display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MyTruck = props => {
    return (
        <Card>
            <h3>My Food Truck</h3>
            <div>Dilapidated Truck</div>
            <ul>
                <EquipmentItem>
                    <span>Rusty Oven</span>
                    <span>★☆☆☆☆</span>
                </EquipmentItem>
                <EquipmentItem>
                    <span>Rusty Fridge</span>
                    <span>★☆☆☆☆</span>
                </EquipmentItem>
                <EquipmentItem>
                    <span>Rusty Fryer</span>
                    <span>★☆☆☆☆</span>
                </EquipmentItem>
                <EquipmentItem>
                    <span>Rusty Griddle</span>
                    <span>★☆☆☆☆</span>
                </EquipmentItem>
            </ul>
        </Card>
    );
};

export default MyTruck; 
