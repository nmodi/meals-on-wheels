import React from 'react';
import styled from 'styled-components';
import {connect, useSelector, useDispatch} from 'react-redux';

import Card from './Card';
import Button from './Button';

import {buyTruck} from '../state/actions'; 

import data from '../config/trucks.yaml';

const Truck = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    align-items: flex-start;
`;

const TruckProp = styled.span`
    display: block;
    padding: 1px;
`;

const AllTrucks = () => {

    const money = useSelector(state => state.money); 
    console.log(money); 
    const truck = useSelector(state => state.truck); 
    console.log(truck); 
    const dispatch = useDispatch(); 

    return (
        <Card>
            <h3>Trucks for Sale</h3>
            {data.map(truck => (
                <Truck key={truck.id}>
                    <TruckProp>{truck.name}</TruckProp>
                    <TruckProp>{truck['equipment-slots']} Slots</TruckProp>
                    <TruckProp>${truck.cost}</TruckProp>
                    <Button onClick={() => dispatch(buyTruck(truck))}>Buy</Button>
                </Truck>
            ))}
        </Card>
    );
};

export default connect()(AllTrucks);
