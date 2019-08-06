import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

import Card from './Card';
import Button from './Button';

import {buyAppliance} from '../state/actions';

import allAppliances from '../config/appliances.yaml';

const ApplianceList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    align-items: flex-start;
`;

const ApplianceProp = styled.span`
    display: block;
    padding: 1px;
`;

const AppliancesForSale = () => {
    const dispatch = useDispatch();
    const truck = useSelector(state => state.truck);
    const ownedAppliances = useSelector(state => state.appliances);

    return (
        <div>
            {truck.name && (
                <Card>
                    <h3>Appliance for Sale</h3>
                    {allAppliances.map(appliance => (
                        <ApplianceList key={appliance.name}>
                            <ApplianceProp>{appliance.name}</ApplianceProp>
                            <ApplianceProp>${appliance.cost}</ApplianceProp>
                            <Button
                                onClick={() =>
                                    dispatch(buyAppliance(appliance))
                                }
                            >
                                Buy
                            </Button>
                        </ApplianceList>
                    ))}
                </Card>
            )}
        </div>
    );
};

export default AppliancesForSale;
