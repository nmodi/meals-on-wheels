import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';

import colors from '../app/colors';

const Div = styled.div`
    border-bottom: 1px solid #333;
    padding: 10px;
    margin: 65px 0 0;
    background: ${colors.grayLight};
    height: 45px;
`;

const StatusBar = props => {
    return <Div>Money: {props.money}</Div>;
};

const mapStateToProps = state => {
    return {money: state.game.money};
};

export default connect(mapStateToProps)(StatusBar);
