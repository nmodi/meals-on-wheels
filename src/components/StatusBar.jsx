import React from 'react';
import styled from 'styled-components';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';

import {selectors, actions} from '../game/gameReducer';

import Button from './Button';

const Bar = styled.div`
    border-bottom: 1px solid ${props => props.theme.grayDark};
    padding: 10px;
    display: flex;
    margin: 65px 0 0;
    background: ${props => props.theme.grayLight};
    height: 50px;
    justify-content: flex-end;
    align-items: center;
`;

const StatusItem = styled.span`
    margin: 0 10px;
`;

const StatusBar = props => {
    return (
        <Bar>
            <StatusItem>Demand: {props.demand}</StatusItem>
            <StatusItem>Money: {props.money}</StatusItem>
            <Button onClick={() => props.toggleTruck()}>
                {props.isTruckActive ? 'Recall truck' : 'Deploy truck'}
            </Button>
        </Bar>
    );
};

const mapStateToProps = state => {
    return {
        money: selectors.getMoneyCount(state),
        isTruckActive: selectors.isTruckActive(state),
        demand: selectors.getRawDemand(state)
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            toggleTruck: actions.toggleTruck
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
