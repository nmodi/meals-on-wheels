import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const Div = styled.div `
    border-bottom: 1px solid #333; 
    padding: 10px; 
    margin: 0 0 25px;
    background: ${colors.grayLight};  
`;

const StatusBar = () => {
    return (
        <Div>
            Status Bar
        </Div>
    );
}

export default StatusBar;