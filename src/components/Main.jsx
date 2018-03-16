import React from 'react';
import styled from 'styled-components';

const Main = styled.main `
    background: ${props => props.theme.grayLighter}; 
    height: calc(100vh - 65px); 
    padding: 0 5%; 
    display: flex; 
    justify-content: center; 
`;

export default Main;
