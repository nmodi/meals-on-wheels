import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const Main = styled.main `
    margin-top: 65px;
    background: ${colors.grayLighter}; 
    height: calc(100vh - 65px); 
    padding: 0 5%; 
    display: flex; 
    justify-content: center; 
`;

export default Main;
