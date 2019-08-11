import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';

import Card from './Card';

const StatItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MyStats = props => {
    const money = useSelector(state => state.money);
    const customers = useSelector(state => state.customersServed);
    const reputation = useSelector(state => state.reputation);

    return (
        <Card>
            <h3>Stats</h3>
            <ul>
                <StatItem>
                    <span>Money</span>
                    <span>${money}</span>
                </StatItem>
                <StatItem>
                    <span>Reputation</span>
                    <span>{reputation}%</span>
                </StatItem>
                <StatItem>
                    <span>Customers Served</span>
                    <span>{customers}</span>
                </StatItem>
            </ul>
        </Card>
    );
};

export default MyStats;
