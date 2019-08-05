import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

import Card from './Card';
import Button from './Button';

import {buyEquipment} from '../state/actions';

import data from '../config/equipment.yaml';

const EquipmentList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    align-items: flex-start;
`;

const EquipmentProp = styled.span`
    display: block;
    padding: 1px;
`;

const EquipmentForSale = () => {
    const dispatch = useDispatch();

    const equipmentArray = Object.keys(data).map(i => data[i]);

    return (
        <Card>
            <h3>Equipment for Sale</h3>
            {equipmentArray.map(equipment => (
                <EquipmentList key={equipment.id}>
                    <EquipmentProp>{equipment.name}</EquipmentProp>
                    <EquipmentProp>${equipment.cost}</EquipmentProp>
                    <Button onClick={() => dispatch(buyEquipment(equipment))}>
                        Buy
                    </Button>
                </EquipmentList>
            ))}
        </Card>
    );
};

export default EquipmentForSale;
