import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';

const Div = styled.div`
    border-bottom: 1px solid ${props => props.theme.grayDark};
    padding: 10px;
    margin: 65px 0 0;
    background: ${props => props.theme.grayLight};
    height: 45px;
`;

const StatusBar = props => {
    return <Div>Money: {props.money}</Div>;
};

const mapStateToProps = state => {
    return {money: state.game.money};
};

export default connect(mapStateToProps)(StatusBar);
