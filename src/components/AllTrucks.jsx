import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

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
    const trucksArray = Object.keys(data).map(i => data[i]);
    const dispatch = useDispatch();
    const truck = useSelector(state => state.truck);

    const truckId = truck.id;
    const unownedTrucks = trucksArray.filter(a => {
        if (truckId != a.id) return a;
    });

    return (
        <Card>
            <h3>Trucks for Sale</h3>
            {/* TODO add message if all the trucks are sold */}
            {unownedTrucks.map(truck => (
                <Truck key={truck.id}>
                    <TruckProp>{truck.name}</TruckProp>
                    <TruckProp>{truck['appliance-slots']} Slots</TruckProp>
                    <TruckProp>${truck.cost}</TruckProp>
                    <Button onClick={() => dispatch(buyTruck(truck))}>
                        Buy
                    </Button>
                </Truck>
            ))}
        </Card>
    );
};

export default AllTrucks;
