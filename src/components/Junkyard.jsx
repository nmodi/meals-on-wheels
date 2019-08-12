import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button'; 

import trucksRaw from '../config/trucks.yaml';
import appliances from '../config/appliances.yaml';
const trucks = Object.keys(trucksRaw).map(i => trucksRaw[i]);

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    align-items: flex-start;
`;

const ListItemDetail = styled.span`
    display: block;
    padding: 1px;
`;

const Junkyard = () => {
    const dispatch = useDispatch();
    const truck = useSelector(state => state.truck);
    const ownedAppliances = useSelector(state => state.appliances);

    const truckId = truck.id;
    const junkyardTrucks = trucks
        .filter(a => a.junkyard)
        .filter(a => {
            if (truckId != a.id) return a;
        });

    let ownedAppIds = ownedAppliances.map(a => a.id);
    const junkyardAppliances = appliances
        .filter(a => a.junkyard)
        .filter(a => {
            if (!ownedAppIds.includes(a.id)) return a;
        });

    const junkyardForSale = junkyardTrucks.concat(junkyardAppliances); 

    return (
        <Card>
            <h3>Junkyard</h3>

            {junkyardForSale.map(appliance => (
                <ListItem key={appliance.name}>
                    <ListItemDetail>{appliance.name}</ListItemDetail>
                    <ListItemDetail>${appliance.cost}</ListItemDetail>
                    <Button onClick={() => dispatch(buyAppliance(appliance))}>
                        Buy
                    </Button>
                </ListItem>
            ))}
        </Card>
    );
};

export default Junkyard;
