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
                    <span>90%</span>
                </StatItem>
                <StatItem>
                    <span>Customers Served</span>
                    <span>900</span>
                </StatItem>
            </ul>
        </Card>
    );
};

export default MyStats;
